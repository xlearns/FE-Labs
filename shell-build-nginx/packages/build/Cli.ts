import cac from "cac";
import inquirer from "inquirer";
import { Ci, Ng } from "./api";

const cli = cac();

const choices = [
	["生成", Ng],
	["部署", Ci],
];

const methods = Object.fromEntries(choices);

const keys = choices.map(([choic, _]) => choic) as string[];

cli.command("").action(async (files, options) => {
	let answer = await inquirer.prompt([
		{
			name: "type",
			type: "list",
			message: "请选择",
			choices: keys,
		},
	]);
	keys.forEach((key) => {
		if (answer.type == key) methods[key]();
	});
});

cli.parse();
