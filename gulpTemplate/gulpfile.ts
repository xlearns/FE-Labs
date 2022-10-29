import { dest, parallel, series, src } from "gulp";
import dartSass from "sass";
import gulpSass from "gulp-sass";
import autoprefixer from "gulp-autoprefixer";
// css压缩
// import clearCss from "gulp-clean-css";
import path from "path";

// console美化
// import consola from "consola";

// 文件重命名
// import rename from "gulp-rename";
const distFolder = path.resolve(__dirname, "dist");

function buildThemeChalk() {
	const sass = gulpSass(dartSass);
	const res = src(path.resolve(__dirname, "src/*.scss"))
		.pipe(sass.sync())
		.pipe(autoprefixer({ cascade: false }))
		.pipe(dest(distFolder));
	return res;
}

export const build = parallel(series(buildThemeChalk));
export default build;
