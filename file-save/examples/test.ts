import { fileSave } from "../packages/fs";
import { writeFileSync } from "fs";
let template = `
<script setup lang=ts>
 import {ref} from 'vue'
 let msg = ref('hell world')
</script>

<template>
<div>{{msg}}</div>
</template>
`;

fileSave("dist/test.vue")
	.write(template, "utf8", function () {
		console.log("writer callback");
	})
	.end("<!-- this is the end -->")
	.finish(function () {
		console.log("write finished.");
	});

fileSave("dist/aaa.vue")
	.write(template, "utf8")
	.finish(() => {});

//当路径的文件夹存在
//writeFileSync("dist/test.vue",template)
