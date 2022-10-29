import fs from "fs";
import chalk from "chalk";

export const existSync = (path: string) => {
  try {
    fs.accessSync(path, fs.constants.F_OK);
    return true;
  } catch (error) {
    return false;
  }
};

export const log = (_) => {
  console.log(chalk.green(_));
};
