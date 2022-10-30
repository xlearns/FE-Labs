<script setup lang="ts">
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from "@element-plus/icons-vue";
defineProps({
  collapse: {
    type: Boolean,
    default: true,
  },
  mode: {
    type: String,
    default: "horizontal",
  },
});
</script>
<template>
  <el-menu
    :collapse="collapse"
    active-text-color="#ffd04b"
    background-color="#545c64"
    :ellipsis="true"
    default-active="2"
    text-color="#fff"
    :mode="mode"
  >
    <el-sub-menu index="1">
      <template #title>
        <el-icon><location /></el-icon>
        <span :style="{ width: mode == 'horizontal' ? 'auto' : '200px' }"
          >Navigator One</span
        >
      </template>
      <el-menu-item-group title="Group One">
        <el-menu-item index="1-1">item one</el-menu-item>
        <el-menu-item index="1-2">item two</el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group title="Group Two">
        <el-menu-item index="1-3">item three</el-menu-item>
      </el-menu-item-group>
      <el-sub-menu index="1-4">
        <template #title>item four</template>
        <el-menu-item :index="`1-4-${index+1}`" :key='index' v-for='(item,index) in 6'>item {{index}}</el-menu-item>
      </el-sub-menu>
    </el-sub-menu>
    <el-menu-item index="2">
      <el-icon><icon-menu /></el-icon>
      <span>Navigator Two</span>
    </el-menu-item>
    <el-menu-item index="3" disabled>
      <el-icon><document /></el-icon>
      <span>Navigator Three</span>
    </el-menu-item>
    <el-menu-item index="4">
      <el-icon><setting /></el-icon>
      <span>Navigator Four</span>
    </el-menu-item>
  </el-menu>
</template>
