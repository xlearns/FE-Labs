import { createRouter, createWebHistory } from "vue-router";
import type { RouteRecordRaw, Router } from "vue-router";
import type { toRouteType, routesItems } from "./types";
import { Nav } from "@/utils";
const modules = import.meta.globEager("@/views/modules/**/*.vue");

interface type_view {
  url: string;
  name: string;
  meta?: Record<string, string | string[]>;
}

const view = Nav.slice(1).map((v: type_view) => {
  const component = Object.keys(modules).filter((mod: string) => {
    const m = /modules\/(.+)\/index(\.)vue/g.exec(mod);
    const key = (m && m[1]) || false;
    return key == v.url;
  });
  return {
    path: "/" + v.url,
    name: v.url,
    meta: { title: v.name, ...v.meta },
    component: () => Promise.resolve(modules[component[0]].default)
  };
});

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: () => import("@v/Layout.vue"),
    meta: { isPublic: true, title: "首页" },
    redirect: "/home",
    children: [
      {
        path: "/home",
        name: "home",
        component: () => import("@v/modules/home/index.vue")
      },
      ...view
    ]
  }
];

const router: Router = createRouter({
  history: createWebHistory(),
  routes
});

router.beforeEach((to: toRouteType, _from, next) => {
  to.matched.some((item: routesItems) => {
    if (!item.meta.title) {
      return "";
    }
    document.title = item.meta.title;
  });
  next();
});
export default router;
