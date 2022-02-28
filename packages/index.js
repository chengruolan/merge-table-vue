import { Table } from "ant-design-vue";
import "ant-design-vue/lib/table/style";

import TTable from "./components/table";
import MTable from "./components/MTable";

const components = {
  TTable,
  MTable,
  Table
};

const install = Vue => {
  if (install.installed) return;
  install.installed = true;
  // Vue.mixin(chartsMixins);
  for (const key in components) {
    if (Object.prototype.hasOwnProperty.call(components, key)) {
      const component = components[key];
      Vue.component(component.name, component);
    }
  }
};

// 如果是直接引入的
if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}
export default {
  install,
  ...components
};
