import { getException, getTime } from "./utils";

export const log = (...args) => {
	let errStack = getException().split("\n");
	let line = 0;
	for (let i = 0; i < errStack.length; i++) {
		let s = errStack[i];
		if (s.indexOf("at log") > -1) {
			line = i + 1;
			break;
		}
	}
	let container = errStack[line].split("/");
	let file = container[container.length - 1].replace(")", "").trim();

	/**
	 * @description:需要区分是否是node环境,可以借鉴一下chalk
	 */
	let title = document.title || "页面标题";
	let pre = "%c[" + getTime() + "]%c[" + title + "]%c[" + file + "]";
	let style1 = "color:#fff;background-color:#2196f3;border-radius:3px;";
	let style2 = "color:#fff;background-color:#8bc34a;border-radius:3px;";
	let style3 = "color:#fff;background-color:#ff7777;border-radius:3px;";
	setTimeout(
		console.log.bind(null, pre, style1, style2, style3, "[", ...args, "]"),
		0
	);
};

export default log;
