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

const status = [
  ["error", "red"],
  ["success", "green"],
  ["warning", "yellow"],
];

export const log = Object.fromEntries(
  status.map(([key, val]) => {
    return [
      key,
      (_) => {
        console.log(chalk[val](_));
      },
    ];
  })
);
