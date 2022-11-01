import shell from "shelljs";
import { log } from "./utils";

const { mv, chmod, exec } = shell;
export default (config) => {
  const { input, output, command } = config;
  exec(`rm -rf ${output}`)
  mv(input, output);
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
