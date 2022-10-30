export default {
  port: 8848,
  input: "dist",
  output: "word",
  proxy: [
    ["/api", "http://localhost"],
    ["/api1", "http://localhost"],
    ["/api2", "http://localhost"],
  ],
};
