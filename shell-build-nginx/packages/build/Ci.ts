import shell from "shelljs";
import { log } from "./utils";

const { cp, chmod, exec } = shell;
export default (config) => {
	const { input, output, command } = config;
	exec(`rm -rf ${output}`);
	cp("-R", input, output);
	log.success("move finish");
	chmod(777, output);

	command.forEach((com) => {
		exec(
			com.replaceAll(/var\((.+)\)/g, (_, __) => {
				return config[__] || "";
			})
		);
	});
};
