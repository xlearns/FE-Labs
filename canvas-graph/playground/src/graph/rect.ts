import { useCanvasDrag } from "@/hooks/useCanvasDrag";

const { grapthData, ctx } = useCanvasDrag();
const defaultOptions = {
	x: 0,
	y: 0,
	w: 50,
	h: 50,
	c: "#000",
};
export class Rect {
	options: any;
	constructor(options) {
		this.options = Object.assign({}, defaultOptions, options);
		grapthData.value.push({
			fn: () => {
				this.draw();
			},
			...this.options,
		});
	}
	draw() {
		if (!ctx.value) return;
		let { x, y, w, h, c } = this.options;
		ctx.value.fillStyle = c;
		ctx.value.fillRect(x, y, w, h);
	}
}
