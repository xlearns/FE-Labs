module.exports = {
	port: 8080,
	input: "test",
	output: "word",
	proxy: [
		["/api", "http://localhost"],
		["/api1", "http://localhost"],
		["/api2", "http://localhost"],
	],
};
