import _Ci from "./Ci";
import _Ng from "./Ng";
import { existSync } from "./utils";
import { resolve } from "path";
import _default from "../config/ng.config";
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const root = process.cwd();

let config = _default;
let _file = resolve(root, "ng.config.ts");
if (existSync(_file)) {
  const { default: _ } = require(_file);
  config = Object.assign({}, _default, _);
}

export const Ci = () => _Ci(config);
export const Ng = () => _Ng(config);
