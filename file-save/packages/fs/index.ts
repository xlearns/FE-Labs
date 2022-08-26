import fs from "fs";
import { resolve, dirname } from "path";
import mkdirp from "mkdirp";

class craeteFileSave {
	dirName: string;
	oriPath: string;
	dirPath: string;
	file: any;
	writer: fs.WriteStream | undefined;
	constructor(file, opts) {
		this.dirName = dirname(file);
		this.oriPath = resolve(file);
		this.dirPath = resolve(this.dirName);
		this.createDir(this.dirPath, opts);
	}
	save() {
		return this;
	}
	createDir(fp, opts) {
		mkdirp.sync(fp, opts);
		return this;
	}
	wstream(file) {
		let ws = fs.createWriteStream(file);
		this.writer = ws;
		return this;
	}
	write(chunk, encoding, cb?) {
		if (!this.writer)
			throw new Error("writer is undefineder please run wstream");
		if (arguments.length === 3) {
			this.writer.write(chunk, encoding, cb);
		} else if (arguments.length === 2 && typeof arguments[1] === "function") {
			cb = encoding;
			encoding = null;
			this.writer.write(chunk, cb);
		} else if (arguments.length === 2 && typeof arguments[1] !== "function") {
			this.writer.write(chunk, encoding);
		} else {
			this.writer.write(chunk);
		}
		return this;
	}
	end(chunk, encoding?, cb?) {
		if (!this.writer)
			throw new Error("writer is undefineder please run wstream");
		if (arguments.length === 3) {
			this.writer.end(chunk, encoding, cb);
		} else if (arguments.length === 2 && typeof arguments[1] === "function") {
			cb = encoding;
			encoding = null;
			this.writer.end(chunk, cb);
		} else if (arguments.length === 2 && typeof arguments[1] !== "function") {
			this.writer.end(chunk, encoding);
		} else {
			this.writer.end(chunk);
		}

		return this;
	}
	finish(cb?) {
		if (!this.writer)
			throw new Error("writer is undefineder please run wstream");
		this.writer.on("finish", cb || function () {});
	}
	error(cb) {
		if (!this.writer)
			throw new Error("writer is undefineder please run wstream");
		this.writer.on("error", cb);
	}
}
function fileSave(file, opts?) {
	let _fileSave = new craeteFileSave(file, opts);
	return _fileSave.wstream(_fileSave.oriPath);
}

export { fileSave };
