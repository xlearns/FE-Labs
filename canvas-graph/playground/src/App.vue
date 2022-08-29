<script setup lang="ts">
import { $ref } from "vue/macros";
import { onMounted, ref } from "vue";
import type { op_config } from "./types";
import { useCanvasDrag } from "@/hooks/useCanvasDrag";
import { Rect } from "@/graph/rect";
let dom = ref<HTMLCanvasElement | null>(null);
let ctx: CanvasRenderingContext2D | null = $ref();
let config: op_config = $ref();

const { draw, init: CDInit, grapthData } = useCanvasDrag(dom);

function background() {
	createRect(config);
}

function createRect({ x = 0, y = 0, w = 50, h = 50, c = "#000" }) {
	if (!ctx) return;
	ctx.fillStyle = c;
	ctx.fillRect(x, y, w, h);
}

function getParentDomSize() {
	let _dom = document.querySelector("#app") as HTMLElement;
	if (!_dom || !dom.value) return;
	let w = _dom.offsetWidth;
	let h = _dom.offsetHeight;
	config = { w, h };
	dom.value.width = w;
	dom.value.height = h;
}

function init() {
	return new Promise((res) => {
		if (!dom.value) return;
		getParentDomSize();
		ctx = dom.value.getContext("2d");
		background();
		CDInit();
		draw([background, main]);
		res(true);
	});
}

function initGraph() {
	Array.from({ length: 10 }, (v, i) => {
		return new Rect({ c: "#fff", x: i * 50, y: i * 50 });
	});
	main();
}

function main() {
	grapthData.value.forEach((it) => it.fn());
}

onMounted(async () => {
	await init();
	initGraph();
});
</script>

<template>
	<canvas ref="dom" />
</template>
