import { createApp } from "./main";

const { app, router } = createApp();

router.isReady().then(() => {
	router.beforeEach((to, form, next) => {
		const toComponents = router
			.resolve(to)
			.matched.flatMap((record: any) => Object.values(record.components));

		const formComponents = router
			.resolve(form)
			.matched.flatMap((record: any) => Object.values(record.components));

		const actived = toComponents.filter((c, i) => {
			return formComponents[i] !== c;
		});

		const route = router.currentRoute;
    
		Promise.all(
			actived.map((Component: any) => {
				if (Component.asyncData) {
					return Component.asyncData({
						route,
					});
				}
				return Component;
			})
		).then(() => {
			next();
		});
	});
	app.mount("#app");
});
