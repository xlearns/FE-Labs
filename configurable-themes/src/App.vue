<script setup lang="ts">
import { ref, onMounted, computed } from "vue";
import Menu from "./components/menu.vue";

const collapse = ref();
const show = ref(true);
const areas = ref(`
     "nav nav nav nav"
     "sidebar main main main"
     "sidebar main main main"
     "sidebar main main main"
    `);
// const sm = breakpoints.smaller('sm');

function resize() {
  if (window.innerWidth <= 800) {
    collapse.value = true;
  } else {
    collapse.value = false;
  }
  /*
  if(window.innerWidth<=600){
     show.value = false
  }else{
     show.value = true
  }
*/
}

onMounted(() => {
  resize();
});

function click() {
  if (!show.value) {
    areas.value = `
     "nav nav nav nav"
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
window.addEventListener("resize", resize);
</script>

<template>
  <div class="box">
    <div class="container" :style="style">
      <div class="sidebar" v-if="show">
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
          height: 60px;
          background: #545c64;
        "
      >
        <div style="color: #fff">logo</div>
        <div v-if="!show" style="flex: 1; height: 100%; overflow: hidden">
          <Menu :collapse="false" style="height: 100%" />
        </div>
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
<style>
.box {
  padding: 20px;
  height: 100vh;
  box-sizing: border-box;
}
.container {
  display: grid;
  grid-template-columns: auto 1fr 1fr 1fr;
  grid-template-rows: 0.4fr 1.6fr 1.2fr 0.8fr;
  gap: 10px 10px;
  grid-auto-flow: row;
}

.sidebar {
  grid-area: sidebar;
  background: #545c64;
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

.el-menu--horizontal {
  border-bottom: none !important;
}
</style>
