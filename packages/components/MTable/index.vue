<template>
  <div class="m-table">
    <a-table :columns="columns" :data-source="flatData" key="key"> </a-table>
  </div>
</template>

<script>
import { flatObject } from "@p/util/tool.js";
export default {
  name: "MTable",
  props: {
    tableLayout: {},
    bordered: {},
    childrenColumnName: {},
    components: {},
    dataSource: {},
    defaultExpandAllRows: {},
    defaultExpandedRowKeys: {},
    expandedRowKeys: {},
    expandedRowRender: {},
    expandIcon: {},
    expandRowByClick: {},
    data: {},
    columns: {}
  },

  created() {
    this.setColumns();
    this.flatData = flatObject(this.data);
  },
  watch: {
    data: {
      deep: true,
      handler(val) {
        this.flatData = flatObject(val);
      }
    }
  },
  data() {
    return {
      flatData: []
    };
  },

  methods: {
    setColumns() {
      for (let i = 0; i < this.columns.length; i++) {
        let e = this.columns[i];
        e.customRender = (text, row, index) => {
          console.log(text, row, index);
        };
      }
    }
  }
};
</script>

<style lang="scss" scoped></style>
