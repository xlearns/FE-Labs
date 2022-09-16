<template>
  <div class="box">
    <ElPagination
      layout="prev, pager, next"
      :total="100"
      next-text="下一页"
      prev-text="上一页"
    />
  </div>
</template>

<style scoped lang="scss">
.box :deep() {
  .el-pagination {
    display: flex;
    justify-content: flex-end;
    .btn-next,
    .btn-prev {
      width: 149px !important;
      height: 43px !important;
      color: #fff !important;
      background-size: 100% 100% !important;
    }

    .btn-prev {
      background: url(./../../../assets/pshuv5g8gu7y665cxrcqta3y4ae5xud29bi32f5665d-53bf-4a0b-9e4f-f6617a57153c.png)
        100% no-repeat !important;
    }

    .btn-next {
      background: url(./../../../assets/pshuv5g8gu7y665cxrcqta3y4ae5xud29bi32f5665d-53bf-4a0b-9e4f-f6617a57153c.png)
        100% no-repeat !important;
    }
  }

  .el-pager li {
    font-size: 28px !important;
    color: #0d6cd1 !important;
    background-color: transparent !important;
  }

  .el-pager li.is-active {
    color: #0096ff !important;
  }
}
</style>
