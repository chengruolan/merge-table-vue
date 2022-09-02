const navbar = require('./config/navbar')
const sidebar = require('./config/sidebar')

module.exports = {
  title: '基于Vue的合并表格组件库', // 设置网站标题
  description: '基于Vue的合并表格组件库',
  // base: '/v1/adroi-h5/adroiapi/',
  themeConfig: {
    nav: navbar,
    sidebar: sidebar,
    sidebarDepth: 2,
  },
}
