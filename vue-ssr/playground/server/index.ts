import Koa from "koa";
import koaConnect from "koa-connect";
import { promises as fs } from "fs";
import { resolve } from "path";
import { createServer } from "vite";
(async () => {
	const app = new Koa();
	const root = process.cwd();
	const isProduction = process.env.NODE_ENV === "production";

	// app.use(async (ctx) => {
	// 	const filepath = resolve(root, "index.html");
	// 	const template = await fs.readFile(filepath, "utf-8");
	// 	ctx.body = template;
	// });
	let vite;
	if (!isProduction) {
		// 开发环境
		vite = await createServer({
			root,
			logLevel: "error",
			server: {
				middlewareMode: "ssr",
				watch: {
					usePolling: true,
					interval: 100,
				},
			},
		});
		app.use(koaConnect(vite.middlewares));
	} else {
		// 生产环境
	}

	app.use(async (ctx) => {
		const filepath = resolve(root, "index.html");
		try {
			let template = await fs.readFile(filepath, "utf-8");
			template = await vite.transformIndexHtml(ctx.path, template);
			const { render } = await vite.ssrLoadModule("entry-server.ts");
			const { renderedHtml } = await render(ctx, {});
			const html = template.replace("<!--app-html-->", renderedHtml);
			ctx.type = "text/html";
			ctx.body = html;
		} catch (e) {
			console.log(e);
		}
	});

	app.listen(9000, () => {
		console.log("http://localhost:9000/");
	});
})();
