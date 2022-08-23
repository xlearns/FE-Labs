import { createApp } from "../src/main";
import { renderToString } from "@vue/server-renderer";

export const render = async () => {
	const { app } = createApp();
	const renderCtx: { modules?: string[] } = {};

	let renderedHtml = await renderToString(app, renderCtx);

	return { renderedHtml };
};
