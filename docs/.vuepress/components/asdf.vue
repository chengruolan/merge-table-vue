<template>
  <div>
    tabel
    <a-table :dataSource="dataSource" :columns="columns" />
  </div>
</template>
<script>
import aTable from "ant-design-vue/lib/table";
import "ant-design-vue/lib/aTable/style";
export default {
  name: "asdf",
  components: {
    aTable
  }
};
</script>