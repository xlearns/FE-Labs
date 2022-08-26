import { relative, join } from "path";
import { describe, expect, test } from "vitest";
import execa from "execa";
function example(file: string) {
	return relative(process.cwd(), join(__dirname, "../examples", file));
}

describe("fs.ts", () => {
	test("init test", async () => {
		let file = "test.js";
		let { stdout } = await execa("esno", [example(file)]);
		expect(stdout).toBe("1");
	});
});
