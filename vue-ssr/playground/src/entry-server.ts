import { createApp } from "./main";
import { renderToString } from "@vue/server-renderer";

export async function render(url, manifest) {
	const { app, router } = createApp();
	await router.push(url);
	await router.isReady();
	const matchedComponents = router.currentRoute.value.matched.flatMap(
		(record: any) => Object.values(record.components)
	);
	const route = router.currentRoute;
	await Promise.all(
		matchedComponents.map((Component: any) => {
			if (Component.asyncData) {
				return Component.asyncData({
					route,
				});
			}
			return Component;
		})
	);
	const renderCtx: { modules?: string[] } = {};
	const appHtml = await renderToString(app, renderCtx);
	const preloadLinks = renderPreloadLinks(renderCtx.modules, manifest);
	return { appHtml, preloadLinks };
}

function renderPreloadLinks(
	modules: undefined | string[],
	manifest: Record<string, string[]>
) {
	let links = "";
	const seen = new Set();
	if (modules === undefined) throw new Error();
	modules.forEach((id) => {
		const files = manifest[id];
		if (files) {
			files.forEach((file) => {
				if (!seen.has(file)) {
					seen.add(file);
					links += renderPreloadLink(file);
				}
			});
		}
	});
	return links;
}

function renderPreloadLink(file: string): string {
	if (file.endsWith(".js")) {
		return `<link rel="modulepreload" crossorigin href="${file}">`;
	} else if (file.endsWith(".css")) {
		return `<link rel="stylesheet" href="${file}">`;
	} else if (file.endsWith(".woff")) {
		return ` <link rel="preload" href="${file}" as="font" type="font/woff" crossorigin>`;
	} else if (file.endsWith(".woff2")) {
		return ` <link rel="preload" href="${file}" as="font" type="font/woff2" crossorigin>`;
	} else if (file.endsWith(".gif")) {
		return ` <link rel="preload" href="${file}" as="image" type="image/gif">`;
	} else if (file.endsWith(".jpg") || file.endsWith(".jpeg")) {
		return ` <link rel="preload" href="${file}" as="image" type="image/jpeg">`;
	} else if (file.endsWith(".png")) {
		return ` <link rel="preload" href="${file}" as="image" type="image/png">`;
	} else {
		return "";
	}
}
