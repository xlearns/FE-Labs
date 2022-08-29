import { ref, unref, type Ref } from "vue";
import { oMousePos, cursorInRect } from "@/utils";
import type { event_type, fn_type } from "@/types";

let _dom = ref<HTMLCanvasElement | null>(null);
let isDown = ref(false);
let first_m = ref({ x: 0, y: 0 });
let last_m = ref({ x: 0, y: 0 });
let d = ref({ x: 0, y: 0 });
let D = ref({ x: 0, y: 0 });
let ctx = ref<CanvasRenderingContext2D | null>(null);
let _event = ref<event_type>([]);
let grapthData = ref<any>([]);

window.addEventListener("mousedown", (evt: MouseEvent) => {
	if (!_dom.value) return;
	first_m.value = oMousePos(_dom.value, evt);
	isDown.value = true;
});

/**
 * @description 判断当前鼠标位置是否再图形上，如果不在则拖动canvas，如果在，判断当前图形
 */
window.addEventListener("mousemove", (evt: MouseEvent) => {
	if (!isDown.value || !ctx.value || !_dom.value) return;
	const { x, y } = oMousePos(_dom.value, evt);
	last_m.value = { x, y };
	// cursorInRect(x, y);
	console.log(x, y);
	grapthData.value.forEach((it, i) => {
		if (i == 0) {
			console.log(
				x,
				y,
				it.x + d.value.x + it.w / 2,
				it.y + d.value.y + it.h / 2
			);
		}
	});

	d.value.x = last_m.value.x - first_m.value.x + D.value.x;
	d.value.y = last_m.value.y - first_m.value.y + D.value.y;
	_event.value[0]();
	ctx.value.save();
	ctx.value.translate(d.value.x, d.value.y);
	_event.value.slice(1).forEach((fn: fn_type) => fn());
	ctx.value.restore();
});

window.addEventListener("mouseup", (evt: MouseEvent) => {
	if (!_dom.value) return;
	isDown.value = false;
	last_m.value = oMousePos(_dom.value, evt);
	d.value.x = last_m.value.x - first_m.value.x;
	d.value.y = last_m.value.y - first_m.value.y;
	D.value.x += d.value.x;
	D.value.y += d.value.y;
});

function draw(arr: event_type) {
	if (arr.some((v) => typeof v != "function"))
		throw new Error("arr every item must array");
	_event.value = arr;
}

export const useCanvasDrag = function (
	dom?: HTMLCanvasElement | null | Ref<HTMLCanvasElement | null>
) {
	function init() {
		let d = unref(dom);
		if (!d) return;
		_dom.value = d;
		ctx.value = d.getContext("2d");
	}
	return {
		ctx,
		grapthData,
		init,
		draw,
		isDown,
		D,
		d,
		last_m,
		first_m,
	};
};
