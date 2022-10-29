import {
	createMemoryHistory,
	createRouter,
	createWebHistory,
} from "vue-router";

const routes = [
	{
		path: "/",
		name: "home",
		component: () => import("@/views/home.vue"),
	},
	{
		path: "/test",
		name: "test",
		component: () => import("@/views/test.vue"),
	},
];

export function createSSRRouter() {
	return createRouter({
		routes,
		history: import.meta.env.SSR ? createMemoryHistory() : createWebHistory(),
	});
}
