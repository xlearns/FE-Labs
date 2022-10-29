import { fileURLToPath, URL } from "url";
import path from "path";
const url = "./../../";
const alias = {
  "@": fileURLToPath(new URL(`${url}src`, import.meta.url)),
  "@c": fileURLToPath(new URL(`${url}src/components`, import.meta.url)),
  "@u": fileURLToPath(new URL(`${url}src/utils`, import.meta.url)),
  "@v": fileURLToPath(new URL(`${url}src/views`, import.meta.url)),
  "~@": path.relative(process.cwd(), "/src/assets")
};
export default alias;
