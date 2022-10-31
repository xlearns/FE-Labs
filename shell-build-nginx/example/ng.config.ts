module.exports = {
	port: 8080,
	input: "lib",
	output: "word",
	proxy: [
		["/api", "http://localhost"],
		["/api1", "http://localhost"],
		["/api2", "http://localhost"],
	],
};
