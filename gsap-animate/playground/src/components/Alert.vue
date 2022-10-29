<script setup lang="ts">
import { watchEffect } from "vue";
const emit = defineEmits(["updateAlert"]);
let dialogTableVisible = $ref(true);
const props = defineProps({
  show: {
    type: Boolean,
    default: () => false
  },
  title: {
    type: String,
    default: () => ""
  },
  height: {
    type: Number,
    default: () => 463
  },
  top: {
    type: String,
    default: () => "50%"
  }
});
watchEffect(() => {
  dialogTableVisible = props.show;
});

function fn(status) {
  emit("updateAlert", {
    show: false,
    type: status ? "1" : "0"
  });
}
</script>
<template>
  <!-- bug  must root elemenet otherwise it will not penetrate -->
  <div>
    <ElDialog v-model="dialogTableVisible" :close-on-click-modal="false">
      <div class="box_1 flex-col" :style="{ height: `${height}px` }">
        <div class="text-wrapper_9 flex-row">
          <span class="text_1">{{ title }}</span>
        </div>
        <div class="mx-[36px] mb-[98px] h-full" :style="{ marginTop: '80px' }">
          <slot />
        </div>
        <div class="block_4 flex-row jbetween action">
          <div class="text-wrapper_6 flex-col" @click="fn(false)">
            <span class="text_12">取&nbsp;消</span>
          </div>
          <div class="text-wrapper_7 flex-col" @click="fn(true)">
            <span class="text_13">保&nbsp;存</span>
          </div>
        </div>
      </div>
    </ElDialog>
  </div>
</template>

<style scoped lang="scss">
:deep() {
  .el-overlay {
    top: 10%;
  }
  .el-overlay-dialog {
    top: 105px !important;
    backdrop-filter: blur(2px);
  }
  .el-dialog {
    --el-dialog-bg-color: transparent !important;
    width: 1106px !important;
  }
  .el-dialog__header,
  .el-dialog__headerbtn {
    display: none;
  }

  .el-dialog__body {
    padding: 0 !important;
  }
}

.text-wrapper_9 {
  position: absolute;
  top: 32px;
  left: 16px;
  padding-left: 73px;
  width: 334px;
  height: 43px;
  background: url(./../assets/alert1.png) 100% no-repeat;
  background-size: 100% 100%;
  line-height: 43px;
  box-sizing: border-box;
}

.box_1 {
  width: 1106px;
  background: url(./../assets/alert2.png) 100% no-repeat;
  background-size: 100% 100%;
}

.text_1 {
  width: 139px;
  height: 20px;
  font-size: 20px;
  font-family: MicrosoftYaHei-Bold;
  white-space: nowrap;
  color: rgba(255, 255, 255, 1);
  overflow-wrap: break-word;
}

.action {
  position: absolute;
  right: 93px;
  bottom: 62px;
}

.block_4 {
  width: 200px;
  height: 32px;
}

.text-wrapper_6 {
  width: 80px;
  height: 32px;
  border: 1px solid rgba(137, 214, 254, 1);
  border-radius: 6px;
  background-color: rgba(21, 47, 91, 1);
  box-shadow: 0px 2px 2px 0px rgba(169, 216, 255, 1);
  cursor: pointer;
}

.text-wrapper_7 {
  width: 80px;
  height: 32px;
  background: url(./../assets/psds2lb3ejwwhqimmgae2vztn0kweejfxob3d1c4e0-0b30-4f9f-b4ee-158618c1ecfd.png) -1px
    0px no-repeat;
  background-size: 83px 36px;
  cursor: pointer;
}

.text_12 {
  margin: -9px 0 0 19px;
  width: 41px;
  height: 18px;
  font-size: 18px;
  font-family: MicrosoftYaHei;
  text-align: center;
  white-space: nowrap;
  color: rgba(255, 255, 255, 1);
  overflow-wrap: break-word;
  line-height: 48px;
}

.text_13 {
  margin: -9px 0 0 19px;
  width: 42px;
  height: 19px;
  font-size: 18px;
  font-family: MicrosoftYaHei;
  text-align: center;
  white-space: nowrap;
  color: rgba(255, 255, 255, 1);
  overflow-wrap: break-word;
  line-height: 48px;
}

.jbetween {
  display: flex;
  justify-content: space-between;
}
</style>
