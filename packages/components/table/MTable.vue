<template>
  <div class="m-table">
    <table border="1" bordercolor="#e7ebf0" cellspacing="0" cellpadding="0">
      <thead>
        <tr>
          <th v-for="(ths, index) in colums" :key="index">{{ ths.title }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(tds, index) in tableArray" :key="index">
          <td
            v-for="(colume, index) in colums"
            :key="index"
            :class="{
              displayNone: tds[`layerIndexObj${colume.layerIndex}`]
                ? false
                : true
            }"
            :rowspan="
              tds[`layerIndexObj${colume.layerIndex}`]
                ? tds[`layerIndexObj${colume.layerIndex}`].rowspan
                : 0
            "
          >
            {{
              tds[`layerIndexObj${colume.layerIndex}`]
                ? tds[`layerIndexObj${colume.layerIndex}`][colume.dataIndex]
                : ""
            }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { flatObject } from "@p/util/tool.js";
export default {
  name: "MTable",
  props: {
    colums: {
      type: Array,
      default: () => []
    },
    tableData: {
      type: Array,
      default: () => []
    },
    treeLayer: {
      type: Number,
      default: 1
    }
  },
  created() {
    this.tableArray = flatObject(this.tableData);
  },
  watch: {
    tableData: {
      deep: true,
      handler: val => {
        this.tableArray = flatObject(val);
      }
    }
  },
  data() {
    return {
      tableArray: []
    };
  },

  methods: {}
};
</script>

<style lang="scss" scoped>
@import "@p/styles/ui.scss";
.table {
  line-height: 34px;
  border: 1px solid #eaecef;
  border-top: none;
  display: flex;
  &:first-child {
    border-top: 1px solid #eaecef;
  }
  .border-right {
    border-right: 1px solid #eaecef;
  }
  .flex-1 {
    flex: 1;
  }
}
</style>
