import { resolve } from "path";
import { readFile } from "fs/promises";
import { transform } from "@swc/core";
import { existSync } from "./utils";

const root = process.cwd();

/**
 * fork:https://github.com/nonzzz/no-bump/blob/master/src/cli-impl.ts#L45
 */
function load(filename) {
	const { default: _default } = require(filename);

	const attrs = [
		{ name: "input", def: "./dist" },
		{ name: "port", def: 5173 },
		{ name: "output", def: "/output/" },
	] as const;

	attrs.forEach((attr) => {
		if (typeof attr == "object" && typeof attr != null) {
			console.log(_default[attr.name] || _default[attr.def]);
		}
	});
}

async function main() {
	const _file = resolve(root, "ng.config.ts");

	if (!existSync(_file)) return;

	const file = await readFile(_file, "utf-8");
	await transform(file, {
		filename: _file,
		isModule: "unknown",
		sourceMaps: false,
		module: {
			type: "commonjs",
		},
	});

	load(_file);
}

// main();
