import { mv, chmod, exec } from "shelljs";
import { log } from "./utils";

export default (config) => {
  const { input, output, port } = config;
  mv(input, output);
  log("move finish");
  chmod(777, output);
  //开放端口
  exec(`iptables -I INPUT -p tcp --dport ${port} -j ACCEPT`);
  //重启nginx
  exec("systemctl start nginx.service");
  exec("systemctl reload nginx.service");
  //查看开放端口
  exec("netstat -nap | grep 80");
};
