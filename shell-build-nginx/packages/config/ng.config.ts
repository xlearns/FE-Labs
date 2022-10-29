export default {
  port: 8848,
  output: "/test",
  input: "dist",
  proxy: [["/api", "http://localhost"]],
  nginx: "",
};
