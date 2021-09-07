<template>
  <div class="table111">
    <MTable :tableData="table1Data" :colums="colums1"></MTable>
  </div>
</template>
<script>
import { table1Data, colums1 } from "@/page/data.js";
export default {
  name: "table1",
  computed: {
    menuData: () => {}
  },
  data() {
    return {
      table1Data: table1Data,
      colums1: colums1
    };
  }
};
</script>

<style lang="scss">
.table111 {
  padding-left: 24px;
}
</style>
