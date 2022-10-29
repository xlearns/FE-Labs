<script lang="ts" setup>
import { onMounted, watchEffect } from "vue";
import { useRouter, useRoute } from "vue-router";
import { Nav as nav, formattime } from "@/utils";
let time = $ref();
let active = $ref(1);
const router = useRouter();
const route = useRoute();

function getTime() {
  time = new Date();
  setTimeout(getTime, 700);
}
function change(index) {
  active = index;
  nav[index].url && router.push(nav[index].url);
}

onMounted(() => {
  getTime();
});

watchEffect(() => {
  const name = route.path.slice(1);
  if (name == "home") {
    active = 0;
  } else {
    active = nav.map(v => v.url).indexOf(name) || 0;
  }
});
</script>
<template>
  <div class="page flex-col">
    <div class="section_1 flex-col">
      <div class="group_2 flex-row">
        <div
          :class="`text-wrapper_${index + 1} flex-col cursor-pointer ${
            active == index
              ? index == nav.length - 1
                ? 'activeend'
                : 'active'
              : ''
          }`"
          v-for="(item, index) in nav"
          :key="index"
          @click="change(index)"
        >
          <span :class="`text_${index + 1}`">{{ item.name }}</span>
        </div>
        <div class="group_3 flex-col"></div>
        <img
          class="label_1"
          referrerpolicy="no-referrer"
          src="@/assets/pskhuhz33p9tkob3ltwsghapzkmb1c4wjp29cafef2-1103-45d8-860d-1ae241a15acf.png"
        />
        <img
          class="label_2 cursor-pointer"
          referrerpolicy="no-referrer"
          src="@/assets/psykq6zyyu2kdibf4xwvceg5yugx6bjd09f41526c1-9c98-426c-bb5b-54bc8631b90b.png"
        />
        <span class="text_7 cursor-pointer">test</span>
        <span class="text_8">{{ formattime(time) }}</span>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.page {
  position: relative;
  overflow: hidden;
  width: 1920px;
  height: 1080px;

  .section_1 {
    width: 100%;
    height: 100%;
    background: url("./../assets/ps818dxlggvjg4a4pq7k8c32kayllqa5mpmc360c90f-600d-4b2c-bc69-000bf2ff596f.png")
      100% no-repeat;
    background-size: 100% 100%;
  }

  .group_2 {
    position: relative;
    width: 1920px;
    height: 93px;
    background: url(./../assets/ps8cjs0fubzzol39an6wq2tgpuj7lox96j296a8d28-afa6-42e8-9329-e8ee692156c8.png)
      100% no-repeat;
    // background: url(./../assets/222.gif) 100% no-repeat;
    background-size: 100% 100%;
  }

  .text-wrapper_1 {
    margin: 19px 0 0 40px;
    width: 90px;
    height: 34px;
    background: url(./../assets/psg61m9t2m4fy9cnve7mkx0rag0fyjd7wc6bfe107-27c6-436e-96ca-e00c6cb9fd50.png)
      100% no-repeat;
    background-size: 100% 100%;
  }

  .text_1 {
    margin: 9px 0 0 30px;
    width: 30px;
    height: 16px;
    font-size: 16px;
    font-family: MicrosoftYaHeiLight;
    text-align: center;
    white-space: nowrap;
    color: rgba(255, 255, 255, 1);
    text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.35);
    overflow-wrap: break-word;
    line-height: 16px;
  }

  .text-wrapper_2 {
    margin: 19px 0 0 16px;
    width: 90px;
    height: 34px;
    background: url(./../assets/psti1vxswjvfn31vxmu1nu0o1zy5ltvgwrvcb566173-7634-454c-8ce7-b9a6a8fb4600.png)
      100% no-repeat;
    background-size: 100% 100%;
  }

  .text-wrapper_3,
  .text-wrapper_4 {
    margin: 19px 0 0 20px;
    width: 90px;
    height: 34px;
    background: url(./../assets/psnndcschu4sl3ommzcilqhxo8is18m9maf3478f4c-fa04-429f-b29f-98d0b980e7df.png)
      100% no-repeat;
    background-size: 100% 100%;
  }

  .text_3,
  .text_2 {
    margin: 9px 0 0 13px;
    width: 64px;
    height: 17px;
    font-size: 16px;
    font-family: MicrosoftYaHei;
    text-align: center;
    white-space: nowrap;
    color: rgba(255, 255, 255, 1);
    overflow-wrap: break-word;
    line-height: 16px;
  }

  .active {
    background: url(./../assets/psuxolp7nn7x8mpjr67v66yjkpru2dng7e6aed1f6c-5f96-43d6-a3d2-201cb1f20b64.png)
      100% no-repeat !important;
    background-size: 100% 100%;
  }

  .activeend {
    background: url("./../assets/activebig.png") 100% no-repeat !important;
    background-size: 100% 100% !important;
  }

  .text_4 {
    margin: 9px 0 0 13px;
    width: 64px;
    height: 16px;
    font-size: 16px;
    font-family: MicrosoftYaHei-Bold;
    text-align: center;
    white-space: nowrap;
    color: rgba(255, 255, 255, 1);
    overflow-wrap: break-word;
    line-height: 16px;
  }

  .text-wrapper_5 {
    margin: 19px 0 0 18px;
    width: 90px;
    height: 34px;
    background: url(./../assets/psvlrzpx35o14s731kvq5y96f0m1m7u59sb95392e8-3940-417d-bc0e-4a3a87a99772.png)
      100% no-repeat;
    background-size: 100% 100%;
  }

  .text_5 {
    margin: 9px 0 0 13px;
    width: 64px;
    height: 17px;
    font-size: 16px;
    font-family: MicrosoftYaHei;
    text-align: center;
    white-space: nowrap;
    color: rgba(255, 255, 255, 1);
    overflow-wrap: break-word;
    line-height: 16px;
  }

  .text-wrapper_6 {
    margin: 19px 0 0 18px;
    width: 110px;
    height: 34px;
    background: url(./../assets/pss79qeklc4wcgcrse7ofm0hzqe1tf1qe6h007cf3f8-4c8c-4dd8-9c5e-b023292c2822.png)
      100% no-repeat;
    background-size: 100% 100%;
  }

  .text_6 {
    margin: 10px 0 0 15px;
    width: 79px;
    height: 16px;
    font-size: 16px;
    font-family: MicrosoftYaHei;
    text-align: center;
    white-space: nowrap;
    color: rgba(255, 255, 255, 1);
    overflow-wrap: break-word;
    line-height: 16px;
  }

  .group_3 {
    margin: 34px 0 0 969px;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background-color: rgba(26, 205, 166, 1);
  }

  .label_1 {
    margin: 18px 0 0 70px;
    width: 36px;
    height: 37px;
  }

  .label_2 {
    margin: 19px 0 0 18px;
    width: 32px;
    height: 32px;
  }

  .text_7 {
    margin: 26px 37px 0 9px;
    width: 54px;
    height: 19px;
    font-size: 18px;
    font-family: MicrosoftYaHei;
    text-align: center;
    white-space: nowrap;
    color: rgba(255, 255, 255, 1);
    overflow-wrap: break-word;
    line-height: 18px;
  }

  .text_8 {
    position: absolute;
    top: 29px;
    left: 1554px;
    width: 161px;
    height: 15px;
    font-size: 18px;
    font-family: MicrosoftYaHei;
    text-align: center;
    white-space: nowrap;
    color: rgba(255, 255, 255, 1);
    overflow-wrap: break-word;
    line-height: 18px;
  }
}
</style>
