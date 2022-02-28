<template>
  <div>
    <m-table :columns="colums1" :data="table1Data"></m-table>
  </div>
</template>
<script>
import { table1Data } from "@/page/data.js";

const colums1 = [
  {
    title: "key1",
    dataIndex: "key",
    layerIndex: 1
  },
  { title: "名称1", dataIndex: "name", layerIndex: 1 },
  { title: "电话", dataIndex: "ph", layerIndex: 3 },
  { title: "称谓", dataIndex: "re", layerIndex: 3 }
  // // { title: "key3", dataIndex: "key", layerIndex: 3 },
  // { title: "名称3", dataIndex: "name", layerIndex: 3 }
];
export default {
  name: "table2",
  computed: {},
  data() {
    return {
      colums1,
      table1Data
    };
  }
};
</script>

<style lang="scss"></style>
