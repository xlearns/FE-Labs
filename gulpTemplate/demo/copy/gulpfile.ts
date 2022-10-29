import { dest, parallel, series, src } from "gulp";

function copy() {
	return src("src/*.ts").pipe(dest("output/"));
}

export default copy;
