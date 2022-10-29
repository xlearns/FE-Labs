import { Ref } from "vue";

declare global {
	const $ref: <T>(options?) => T;
}

export {};
