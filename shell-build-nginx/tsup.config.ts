import { defineConfig } from "tsup";

export default defineConfig({
	entry: ["packages"],
	clean: true,
	dts: false,
	outDir: "dist",
	format: ["cjs", "esm"],
});
