<script setup lang="ts">
import { ref, onMounted, computed, watchEffect } from "vue";
import Menu from "../components/menu.vue";
import { breakpointsTailwind, useBreakpoints } from "@vueuse/core";

const breakpoints = useBreakpoints(breakpointsTailwind);

const lg = breakpoints.smaller("lg");

const collapse = ref();
const show = ref(true);
const areas = ref(`
     "sidebar nav nav nav"
     "sidebar main main main"
     "sidebar main main main"
     "sidebar main main main"
    `);

watchEffect(() => {
  if (!lg.value) {
    collapse.value = false;
  } else {
    collapse.value = true;
  }
});

function click() {
  if (!show.value) {
    areas.value = `
     "sidebar nav nav nav"
     "sidebar main main main"
     "sidebar main main main"
     "sidebar main main main"
    `;
  } else {
    areas.value = `
     "nav nav nav nav"
     "main main main main"
     "main main main main"
     "main main main main"
    `;
  }
  show.value = !show.value;
}

const style = computed(() => {
  return {
    "grid-template-areas": areas.value,
  };
});
</script>

<template>
  <div class="box">
    <div class="container" :style="style">
      <div class="sidebar" v-if="show">
        <div
          style="
            color: #fff;
            text-align: left;
            padding: 20px 20px 0 20px;
            box-sizing: border-box;
          "
        >
          logo
        </div>
        <el-scrollbar>
          <Menu :collapse="collapse" mode="vertical" />
        </el-scrollbar>
      </div>
      <div class="main" style="background: #545c64">
        <el-scrollbar>
          <div style="height: 100%; color: #fff; padding: 15px">
            <div v-for="(item, index) in 1000">{{ item }}</div>
          </div>
        </el-scrollbar>
      </div>
      <div
        class="nav"
        style="
          display: flex;
          align-items: center;
          padding: 0 20px;
          box-sizing: border-size;
          background: #545c64;
        "
      >
        <template v-if="!show">
          <div style="color: #fff">logo</div>
          <div style="flex: 1; height: 100%; overflow: hidden">
            <Menu :collapse="false" style="height: 100%" />
          </div>
        </template>
        <span
          style="
            margin-left: auto;
            cursor: pointer;
            color: #fff;
            display: block;
          "
          @click="click"
          >setting</span
        >
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
:deep() {
  .el-menu--vertical {
    border-right: none !important;
  }

  .el-menu--horizontal {
    border-bottom: none !important;
  }
}
.box {
  padding: 20px;
  height: 100vh;
  box-sizing: border-box;
}
.container {
  display: grid;
  grid-template-columns: auto 1fr 1fr 1fr;
  grid-template-rows: 0.3fr 1.6fr 1.2fr 0.8fr;
  gap: 10px 10px;
  grid-auto-flow: row;
}

.sidebar {
  grid-area: sidebar;
  background: #545c64;
  overflow: hidden;
}

.main {
  grid-area: main;
}

.nav {
  grid-area: nav;
}

.container {
  height: 100%;
}

.container > div {
  box-sizing: border-box;
}
</style>
