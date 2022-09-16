<script setup lang="ts">
import { onMounted } from "vue";
const defineConfig = {
  left: { show: true },
  right: { show: true, width: 153 }
};
const props = defineProps({
  left: {
    default: () => "计算容器列表",
    type: String
  },
  right: {
    default: () => "计算容器预创建",
    type: String
  },
  config: {
    default: () => ({}),
    type: Object
  }
});
let conf = $ref({});
const emit = defineEmits(["right", "left"]);
function fn(type) {
  emit(type);
}
onMounted(() => {
  conf = Object.assign({}, defineConfig, props.config);
});
</script>
<template>
  <div class="group_4s flex-col">
    <span class="text_9" @click="fn('left')" v-if="conf.left?.show">{{
      left
    }}</span>
    <div class="custom">
      <slot name="left"></slot>
    </div>
    <div
      v-if="conf.right?.show"
      class="text-wrapper_7 flex-col"
      :style="{ width: `${conf.right.width}px` }"
      @click="fn('right')"
    >
      <span class="text_10">{{ right }}</span>
    </div>
    <div class="text-wrapper_8">
      <slot />
    </div>
  </div>
</template>
<style scoped lang="scss">
.group_4s {
  width: 100%;
  height: 100%;
  background: url(./../assets/psg3zp4wxzwjwzkh3of6qze1mvxdkip0sy969ee565-bdfd-4895-b94f-514ac83dd47e.png)
    100% no-repeat;
  background-size: 100% 100%;
}

.text_9 {
  margin: 8px 0 0 94px;
  // line-height: 52px;
  padding-top: 15px;
  width: 130px;
  height: 22px;
  font-size: 22px;
  font-family: MicrosoftYaHei-Bold;
  text-align: left;
  white-space: nowrap;
  color: rgba(255, 255, 255, 1);
  overflow-wrap: break-word;
}

.text_10 {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  font-size: 18px;
  font-family: MicrosoftYaHei;
  white-space: nowrap;
  color: rgba(255, 255, 255, 1);
  overflow-wrap: break-word;
}

.text-wrapper_7 {
  cursor: pointer;
  position: absolute;
  top: 98px;
  right: 56px;
  height: 36px;
  background: url(./../assets/pscgx3g5vovkhd9q1r5sf58i17l6493kk7z69ae3754-a661-452c-86f1-082f3fbd6095.png)
    0 2px no-repeat;
  background-size: 100% 100%;
}

.text-wrapper_8 {
  // position: absolute;
  // top: calc(26px + 105px);
  // left: 73px;
  margin: 131px 70px 0;
}

.custom {
  position: absolute;
  top: 105px;
  left: 73px;
}
</style>
