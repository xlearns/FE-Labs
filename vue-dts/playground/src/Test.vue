<script lang="ts" setup>
import { defineProps } from "vue";

defineProps<{
  msg: string;
}>();
</script>
<template>
  <div>{{ msg }}</div>
</template>
