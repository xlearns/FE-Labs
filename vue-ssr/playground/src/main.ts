import { createSSRApp } from "vue";
import { createSSRRouter } from "./router/index";
import ElementPlus from "element-plus";
import "element-plus/theme-chalk/index.css";

import "./style.css";
import App from "./App.vue";

export const createApp = () => {
	const app = createSSRApp(App);
	const router = createSSRRouter();
	app.use(router);
	app.use(ElementPlus);
	return {
		app,
		router,
	};
};
