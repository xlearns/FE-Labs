export default {
  port: 8848,
  output: "/test",
  input: "dist",
  proxy: [["/api", "http://localhost"]],
  command: [
    "iptables -I INPUT -p tcp --dport var(port) -j ACCEPT",
    "systemctl start nginx.service",
    "systemctl reload nginx.service",
    "netstat -nap | grep 80",
  ],
};
