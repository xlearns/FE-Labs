import { createSSRApp } from "vue";
import { createSSRRouter } from "./router/index";
import "./style.css";
import App from "./App.vue";

export const createApp = () => {
	const app = createSSRApp(App);
	const router = createSSRRouter();

	app.use(router);
	return {
		app,
		router,
	};
};
