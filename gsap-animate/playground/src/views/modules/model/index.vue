<script setup lang="ts">
import { Box, Alert } from "@/components";
import MTable from "./Table.vue";
import Pagination from "./Pagination.vue";

const action = ["查看", "编辑", "删除"];

let show = $ref(false);
function right() {
  // 点击了right
  show = true;
}
function left() {
  // 点击了left
}

function updateAlert(status: Record<string, string | string[]>) {
  const { show: _show, type: _type } = status;
  show = _show;
  if (_type) {
    //todo
  } else {
    //todo
  }
}
const config = $ref({ right: { show: true, width: 100 } });

function clickFn(data: Record<string, string>, index: number) {
  switch (index) {
    case 0:
      break;
    case 1:
      break;
    case 2:
      break;
  }
}
</script>
<template class="model">
  <Box left="1" right="1" @right="right" @left="left" :config="config">
    <template #left></template>
    <div class="w-full h-[650px] overflow-hidden">
      <MTable class="h-full">
        <template v-slot="data">
          <ElButton
            v-for="(item, index) in action"
            :key="index"
            @click="clickFn(data, index)"
            >{{ item }}</ElButton
          >
        </template>
      </MTable>
    </div>
    <Pagination class="mt-[20px]" />
  </Box>

  <Alert :show="show" title="" @updateAlert="updateAlert">
    <div class="h-full h-full">
      <div class="block_1 flex-row">
        <div class="group_1 flex-col"></div>
        <span class="text_2">name</span>
        <div class="text-wrapper_2 flex-col">
          <div class="text_3 !w-[300px]">
            <ElInput placeholder="name" />
          </div>
        </div>
        <div class="group_2 flex-col"></div>
        <span class="text_4">name</span>
        <div class="text-wrapper_3 flex-col">
          <span class="text_5 !w-[300px]"><ElInput placeholder="name" /></span>
        </div>
      </div>
      <div class="block_2 flex-row">
        <div class="group_3 flex-col"></div>
        <span class="text_6">name</span>
        <div class="text-wrapper_4 flex-col">
          <span class="text_7"><ElInput placeholder="name" /></span>
        </div>
        <span class="text_8">name</span>
        <div class="group_4 flex-row justify-between">
          <span class="text_9"><ElSelect class="!w-[300px]"></ElSelect></span>
        </div>
      </div>
      <div class="block_3 flex-row justify-between">
        <div class="section_2 flex-col"></div>
        <span class="text_10">name</span>
        <div class="text-wrapper_5 flex-col">
          <span class="text_11"
            ><ElInput :rows="2" type="textarea" placeholder="name"
          /></span>
        </div>
      </div>
    </div>
  </Alert>
</template>

<style scoped lang="scss">
:deep() {
  .el-textarea__inner {
    height: 96px;
    border: 1px solid #5cb3ff !important;
    border-radius: 6px !important;
    background: rgba(78, 94, 252, 0.23) !important;
    box-shadow: 0px 1px 9px 0px #000000 !important;
  }
  .el-input__wrapper {
    border: 1px solid #5cb3ff !important;
    border-radius: 6px !important;
    background: rgba(78, 94, 252, 0.23) !important;
    box-shadow: 0px 1px 9px 0px #000000 !important;
  }
  .el-button {
    border: none;
    color: #fff;
  }

  .el-button:nth-of-type(1) {
    background: #0086a5 !important;
  }

  .el-button:nth-of-type(2) {
    background: #0d6cd1 !important;
  }

  .el-button:nth-of-type(3) {
    background: #fa8080 !important;
  }
}

.block_1 {
  margin: 46px 0 0 86px;
  width: 916px;
  height: 32px;
}

.group_1 {
  margin-top: 9px;
  width: 14px;
  height: 14px;
  background-size: 23px 23px;
}

.text_2 {
  margin: 7px 0 0 10px;
  width: 82px;
  height: 19px;
  font-size: 18px;
  font-family: MicrosoftYaHei;
  text-align: center;
  white-space: nowrap;
  color: rgba(255, 255, 255, 1);
  overflow-wrap: break-word;
  line-height: 48px;
}

.text-wrapper_2 {
  margin-left: 10px;
  width: 300px;
  height: 32px;
  background-size: 311px 44px;
}

.text_3 {
  margin: 7px 0 0 11px;
  width: 162px;
  height: 19px;
  font-size: 18px;
  font-family: MicrosoftYaHei;
  text-align: center;
  white-space: nowrap;
  color: rgba(255, 255, 255, 1);
  overflow-wrap: break-word;
  line-height: 48px;
}

.group_2 {
  margin: 9px 0 0 66px;
  width: 14px;
  height: 14px;
  background-size: 23px 23px;
}

.text_4 {
  transform: translate(18px, 0px);
  margin: 7px 0 0 10px;
  width: 100px;
  height: 19px;
  font-size: 18px;
  font-family: MicrosoftYaHei;
  text-align: left;
  white-space: nowrap;
  color: rgba(255, 255, 255, 1);
  overflow-wrap: break-word;
  line-height: 48px;
}

.text-wrapper_3 {
  margin-left: 10px;
  width: 300px;
  height: 32px;
  background-size: 311px 44px;
}

.text_5 {
  margin: 7px 0 0 10px;
  width: 180px;
  height: 19px;
  font-size: 18px;
  font-family: MicrosoftYaHei;
  text-align: center;
  white-space: nowrap;
  color: rgba(255, 255, 255, 1);
  overflow-wrap: break-word;
  line-height: 48px;
}

.block_2 {
  margin: 30px 0 0 50px;
  width: 952px;
  height: 32px;
}

.group_3 {
  margin-top: 9px;
  width: 14px;
  height: 14px;
  background-size: 23px 23px;
}

.text_6 {
  transform: translate(16px, 0px);
  margin: 7px 0 0 10px;
  width: 118px;
  height: 19px;
  font-size: 18px;
  font-family: MicrosoftYaHei;
  text-align: center;
  white-space: nowrap;
  color: rgba(255, 255, 255, 1);
  overflow-wrap: break-word;
  line-height: 48px;
}

.text-wrapper_4 {
  margin-left: 10px;
  width: 300px;
  height: 32px;

  background-size: 311px 44px;
}

.text_7 {
  margin: 7px 0 0 10px;
  width: 300px;
  height: 19px;
  font-size: 18px;
  font-family: MicrosoftYaHei;
  text-align: center;
  white-space: nowrap;
  color: rgba(255, 255, 255, 1);
  overflow-wrap: break-word;
  line-height: 48px;
}

.text_8 {
  margin: 7px 0 0 108px;
  width: 82px;
  height: 19px;
  font-size: 18px;
  font-family: MicrosoftYaHei;
  text-align: left;
  white-space: nowrap;
  color: rgba(255, 255, 255, 1);
  overflow-wrap: break-word;
  line-height: 48px;
}

.group_4 {
  margin-left: 10px;
  width: 300px;
  height: 32px;
  background-size: 311px 44px;
}

.text_9 {
  margin: 8px 0 0 10px;
  height: 17px;
  font-size: 18px;
  font-family: MicrosoftYaHei;
  text-align: center;
  white-space: nowrap;
  color: rgba(255, 255, 255, 1);
  overflow-wrap: break-word;
  line-height: 48px;
}

.thumbnail_1 {
  margin: 11px 10px 0 0;
  width: 16px;
  height: 11px;
}

.block_3 {
  margin: 30px 0 0 86px;
  width: 916px;
  height: 96px;
}

.section_2 {
  margin-top: 9px;
  width: 14px;
  height: 14px;
  background-size: 23px 23px;
}

.text_10 {
  margin: 7px 0 0 10px;
  width: 82px;
  height: 19px;
  font-size: 18px;
  font-family: MicrosoftYaHei;
  text-align: center;
  white-space: nowrap;
  color: rgba(255, 255, 255, 1);
  overflow-wrap: break-word;
  line-height: 48px;
}

.text-wrapper_5 {
  margin-left: 10px;
  width: 800px;
  height: 96px;
  background-size: 812px 107px;
}

.text_11 {
  margin: 7px 0 0 10px;
  height: 96px;
  font-size: 18px;
  font-family: MicrosoftYaHei;
  text-align: center;
  white-space: nowrap;
  color: rgba(255, 255, 255, 1);
  overflow-wrap: break-word;
  line-height: 48px;
}
</style>
