#!/usr/bin/env node
const inquirer = import("inquirer");

const path =import("path")

const shell = import('shelljs')

const ans = [{
  name: "name",
  type: "input",
  message: "请输入项目名称",
  default: "project-name",
}
]
async function init(){
    const {exec} = (await shell).default
    const {resolve} = (await path)
    let {name} = await ((await inquirer).default).prompt(ans)
    const url = resolve(__dirname,'script/monorepo-create.sh')
    exec(`bash ${url} ${name}`);
    // console.log("下载完成")
}

init()