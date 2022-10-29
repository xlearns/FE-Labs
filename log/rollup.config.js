import {resolve} from "path";
import esbuildPlugin from 'rollup-plugin-esbuild'
import commonjs from "@rollup/plugin-commonjs";

function createConfig({ cjs,esm,umd } = {cjs:true}) {
	let file = resolve(__dirname, "dist/index.js");
	let input = resolve(__dirname, "packages/index.ts");
	let config = {}
  
	if(cjs){
		file = file.replace(".js", ".cjs.js");
		config = {format: 'cjs'}
	}

	if (esm) {
		file = file.replace(".js", ".esm.js");
		config = {
			format: 'esm'
		}
	}
	if (umd) {
		file = file.replace(".js", ".umd.js");
		config = {
			format: 'umd',
			name: 'PureLog',
		}
	}
	return {
		input: input,
		output: {
			file,
			exports: "named",
			...config
		},
		plugins: [
			commonjs(),
			esbuildPlugin({
				target: 'es2017',
			})
		]
	};
}

export default [
	createConfig(),
	createConfig({ esm: true }),
	createConfig({ umd: true }),

];
