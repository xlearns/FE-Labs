import { createApp } from "./main";
import { renderToString } from "@vue/server-renderer";

export async function render(url) {
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
	const appHtml = await renderToString(app);
	return { appHtml };
}
