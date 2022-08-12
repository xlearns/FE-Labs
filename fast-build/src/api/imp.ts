import * as rollup from "rollup";
import type { FastOptions } from "../types";
/**
 * @description fast-build config
 */
const define = (options?: FastOptions) => options;

/**
 * @description create a bundle configuration exports build api
 */
export const createBundle = (options?: FastOptions) => {
	return {};
};

/**
 * ExtraOptions only use for fast internal configs
 */
const buildImpl = async () => {};

/**
 * @description paser user options and  preset options
 */
const parserOptions = (
	defaultOptions: FastOptions,
	userOptions: FastOptions
) => {
	if (!Object.keys(userOptions).length) return defaultOptions;

	const options = Object.assign({}, defaultOptions, userOptions);

	return options;
};
