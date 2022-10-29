import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import ssr from "vite-plugin-ssr/plugin";

export default defineConfig({
	plugins: [
		vue({
			reactivityTransform: true,
		}),
		ssr(),
	],
	resolve: {
		alias: {
			"@": resolve(__dirname, "src"),
		},
	},
});
