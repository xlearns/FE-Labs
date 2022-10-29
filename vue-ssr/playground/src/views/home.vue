<script setup lang="ts">
let arr = $ref<string[]>([]);
let v = $ref<string>("");

function init() {
	arr = Array.from({ length: 100 }, (v, i) => i.toString());
}

init();
</script>
<template>
	<div>
		<input v-model="v" /> <button @click="arr.unshift(v)">add</button>
		<div v-for="value in arr">{{ value }}</div>
	</div>
</template>
