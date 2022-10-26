import fs from "fs";

export const existSync = (path: string) => {
	try {
		fs.accessSync(path, fs.constants.F_OK);
		return true;
	} catch (error) {
		return false;
	}
};
