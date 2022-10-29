import { resolve, extname } from "path";
import { existSync, log } from "./utils";
import { createRequire } from "module";
import _default from "./../config/ng.config";
import { promises as fs } from "fs";

const require = createRequire(import.meta.url);

const root = process.cwd();

function createNginxConfig(config) {
  const str = `
  server {
    listen       ${config["port"]};
    server_name  localhost;
    error_page  405     =200 $uri;
    
    location / {
      root   ${config["output"]};
      try_files  $uri $uri/ @router;
      autoindex on;       
      autoindex_exact_size off;   
      charset utf-8;        
      proxy_set_header X-Real-IP $remote_addr;
      proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
      proxy_set_header X-Forwarded-Proto $scheme;
      index  index.html index.htm;
    }
${config["proxy"].map(([key, val]) => {
  return `
    location ${key}{
      rewrite ^${key}/(.*)$ /$1 break;
      proxy_pass  ${val};
    }
    `;
})}
    location @router{
      rewrite ^.*$ /index.html last;
    }
  }
  `;
  return str;
}
async function markConf(config) {
  const _p = resolve(root, config["input"]);
  const path_dist = resolve(_p, "dist.conf");
  const data = createNginxConfig(config);
  await fs.writeFile(path_dist, data).catch((err) => {
    throw new Error(err);
  });

  log("config generate finish");
}

async function main() {
  let config = _default;
  let _file = resolve(root, "ng.config.ts");
  if (existSync(_file)) {
    const { default: _ } = require(_file);
    config = Object.assign({}, _default, _);
  }
  markConf(config);
}

main();
