<script setup lang="ts">
import { FullScreen as ElFullScreen, Nav } from "@/components";
const config = $ref({ width: 1920, height: 1080 });
</script>
<template>
  <ElFullScreen :options="config">
    <Nav />
    <div class="views">
      <RouterView />
    </div>
  </ElFullScreen>
</template>
<style lang="scss" scoped>
.views {
  position: absolute;
  top: 108px;
  right: 42px;
  bottom: 48px;
  left: 42px;
}
</style>
