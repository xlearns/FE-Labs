import express from "express";
import { promises as fs } from "fs";
import { resolve } from "path";
import { createServer as createViteServer } from "vite";
import chalk from "chalk";

function log(str) {
	console.log(chalk.blue(str));
}

const isProd = process.env.NODE_ENV === "production";

const manifest = isProd ? require("../build/client/ssr-manifest.json") : {};

async function createServer() {
	const app = express();

	const root = process.cwd();

	const { transformIndexHtml, middlewares, ssrLoadModule, ssrFixStacktrace } =
		await createViteServer({
			server: { middlewareMode: true },
			appType: "custom",
		});
	app.use(middlewares);
	app.use("*", async (ctx, res) => {
		const url = ctx.originalUrl;
		try {
			let template = await fs.readFile(resolve(root, "index.html"), "utf-8");
			template = await transformIndexHtml(url, template);
			const { render } = await ssrLoadModule(
				resolve(root, "src/entry-server.ts")
			);
			const { appHtml, preloadLinks } = await render(url, manifest);
			const html = template
				.replace("<!--preload-links-->", preloadLinks)
				.replace(`<!--ssr-outlet-->`, appHtml);
			res.status(200).set({ "Content-Type": "text/html" }).end(html);
		} catch (e: any) {
			ssrFixStacktrace(e);
			console.error(e);
			res.status(500).end(e.message);
		}
	});

	app.listen(5173, () => {
		log("🚀 当前为SSR模式");
		log("👉 Local: http://localhost:5173");
	});
}

createServer();
