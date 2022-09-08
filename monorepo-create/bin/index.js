#!/usr/bin/env node
const inquirer = import("inquirer");

const path =import("path")

const shell = import('shelljs')

const n = process.argv[2];

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
    let filename = n 
    if(!filename){
      const {name} =  await ((await inquirer).default).prompt(ans)
      filename = name
    }
    const url = resolve(__dirname,'script/monorepo-create.sh')
    exec(`bash ${url} ${filename}`);
}

init()