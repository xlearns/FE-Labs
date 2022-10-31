export default {
  port: 8848,
  output: "/test",
  input: "dist",
  proxy: [["/api", "http://localhost"]],
  command: [
    "systemctl stop firewalld.service",
    "lsof -i :var(port)|grep -v 'PID'|awk '{print 'kill -9',$2}'|sh",
    "iptables -I INPUT -p tcp --dport var(port) -j ACCEPT",
    "systemctl start nginx.service",
    "systemctl reload nginx.service",
    "netstat -nap | grep var(port)",
  ],
};
