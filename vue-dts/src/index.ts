import path from "path";
import fs from "fs";
import { Project, SourceFile } from "ts-morph";
import type { CompilerOptions } from "ts-morph";
import glob from "fast-glob";
import * as vueCompiler from "vue/compiler-sfc";
import consola from "consola";
/**
 * fork = require( https://github.com/egoist/vue-dts-gen/blob/main/src/index.ts
 */
const root = process.cwd();
const pgk_pg = path.resolve(root, "playground");
const outDir = path.resolve(pgk_pg, "dist");
const input = path.resolve(pgk_pg, "src/**/*.vue");

export async function main() {
  const tsConfigFilePath = fs.existsSync("tsconfig.json")
    ? "tsconfig.json"
    : undefined;
  const compilerOptions: CompilerOptions = {
    allowJs: true,
    declaration: true,
    emitDeclarationOnly: true,
    noEmitOnError: true,
    outDir: outDir,
  };

  const project = new Project({
    compilerOptions,
    tsConfigFilePath,
    skipAddingFilesFromTsConfig: true,
  });

  const sourceFiles = await addSourceFiles(project);

  consola.success("Added source files");

  typeCheck(project);

  consola.success("Type check passed!");
  // auto generate xx vue.d.ts
  // await project.emit({
  //   emitOnlyDtsFiles: true,
  // });
  const emitted = project.emitToMemory();

  for (const sourceFile of sourceFiles) {
    const emitOutput = sourceFile.getEmitOutput();
    for (const outputFile of emitOutput.getOutputFiles()) {
      const filepath = outputFile.getFilePath().replace(".vue.d.ts", ".d.ts");
      await fs.promises.mkdir(path.dirname(filepath), { recursive: true });
      await fs.promises.writeFile(filepath, outputFile.getText(), "utf8");
      console.log(`Emitted ${filepath}`);
    }
  }
}

async function addSourceFiles(project: Project) {
  const files = await glob(input);

  const sourceFiles: SourceFile[] = [];

  await Promise.all(
    files.map(async (file) => {
      const content = await fs.promises.readFile(file, "utf8");
      if (file.endsWith(".ts")) {
        const sourceFile = project.createSourceFile(
          path.relative(process.cwd(), file),
          content,
          {
            overwrite: true,
          }
        );
        sourceFiles.push(sourceFile);
        return;
      }
      const sfc = vueCompiler.parse(content);
      const { script, scriptSetup } = sfc.descriptor;
      if (script || scriptSetup) {
        let content = "";
        let isTS = false;
        if (script && script.content) {
          content += script.content;
          if (script.lang === "ts") isTS = true;
        }
        if (scriptSetup) {
          const compiled = vueCompiler.compileScript(sfc.descriptor, {
            id: "xxx",
          });
          content += compiled.content;
          if (scriptSetup.lang === "ts") isTS = true;
        }
        const sourceFile = project.createSourceFile(
          path.relative(process.cwd(), file) + (isTS ? ".ts" : ".js"),
          content
        );
        sourceFiles.push(sourceFile);
      }
    })
  );

  return sourceFiles;
}

function typeCheck(project: Project) {
  const diagnostics = project.getPreEmitDiagnostics();
  if (diagnostics.length > 0) {
    consola.error(project.formatDiagnosticsWithColorAndContext(diagnostics));
    const err = new Error("Failed to generate dts.");
    consola.error(err);
    throw err;
  }
}

main();
