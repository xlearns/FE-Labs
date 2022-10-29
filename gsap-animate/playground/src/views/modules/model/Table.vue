<script setup lang="ts">
import { onMounted } from "vue";

const header = $ref([
  { prop: "id", label: "id" },
  { prop: "name", label: "name" },
  { prop: "version", label: "version" },
  { prop: "status", label: "status" },
  { prop: "dec", label: "dec" },
  { prop: "create", label: "create" },
  { prop: "control", label: "control" }
]);
const _data = Array.from({ length: 100 }, (i, v) => ({
  id: v + 1,
  name: "name",
  version: "version",
  create: "2022-09-28 08:50:08",
  dec: "dec",
  status: "status",
  control: "control"
}));
let data = $ref([]);

const props = defineProps({
  data: {
    type: Array
  },
  config: {
    type: Object,
    default: () => ({
      action: {
        width: 280
      }
    })
  }
});
const rowState = ({ rowIndex }: { rowIndex: number }) => {
  const res = { color: "#0096FF !important" };
  if (rowIndex % 2) {
    return {
      ...res,
      backgroundColor: "#102456"
    };
  }
  return {
    ...res,
    backgroundColor: "transparent"
  };
};
const headercellStyle = (_c, status?: boolean) => {
  const res = status ? { color: "#fff" } : void 0;
  return {
    ...res,
    height: "58px",
    background: "transparent",
    borderTop: "1px solid #00A2FD",
    borderBottom: "1px solid #00A2FD"
  };
};
const cellStyle = (_c, status?: boolean) => {
  const res = status ? { color: "#fff" } : void 0;
  return {
    ...res,
    height: "58px",
    background: "transparent",
    border: "none !important"
  };
};

function init() {
  data = props.data || _data;
}

onMounted(() => {
  init();
});
</script>
<template>
  <div class="myTable w-full h-full">
    <ElTable
      class="w-full h-full"
      :data="data"
      :cell-style="cellStyle"
      :row-style="rowState"
      :header-cell-style="headercellStyle"
      :header-row-style="c => cellStyle(c, true)"
    >
      <ElTableColumn
        align="center"
        v-for="(item, index) in header"
        :key="index"
        :prop="item.prop"
        :label="item.label"
        :width="item.width"
      />
      <ElTableColumn align="center" :width="config.action.width">
        <template #header>操作 </template>
        <template #default="scope">
          <slot :data="scope" />
        </template>
      </ElTableColumn>
    </ElTable>
  </div>
</template>

<style scoped lang="scss">
.myTable :deep() {
  .el-table__header {
    background: url(./../../../assets/psgjp4scg3ssvmxxay3k1ekymuqn0c88xa2b35f037-5f48-45f9-954c-906875cf4f9c.png)
      0 0/100% no-repeat !important;
  }

  .el-table tbody tr:hover {
    background: url(./../../../assets/psvupdu0t45xgll4rh8ilfmo0ur2g5eokld3bc9c906-c170-48b0-8812-d6beca9e1e3f.png)
      center no-repeat !important;
    background-size: 1704px 100% !important;

    td {
      color: #fff !important;
    }
  }
  .el-table {
    --el-table-border-color: none;
    background: transparent !important;
  }
}
</style>
