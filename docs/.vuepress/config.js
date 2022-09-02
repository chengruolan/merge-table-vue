// const navbar = require('./config/navbar')
// const sidebar = require('./config/sidebar')

const path = require('path')

module.exports = {
  title: '基于Vue的合并表格组件库', // 设置网站标题
  description: '基于Vue的合并表格组件库',
  head: [
    ['link', { rel: 'icon', href: '/header.svg' }]
  ],
  // base: '/v1/adroi-h5/adroiapi/',
  themeConfig: {
    // nav: navbar,
    sidebar:  {
      '/components/': [
        {
          title: 'Tabel合并表格',
          collapsable: true, //是否默认展开
          children: [
            'base/', // 按钮
            'API/', // ICON
          ],
        },
      ],
    }
  },
  plugins: [[
    '@vuepress/register-components',
    {
      componentsDir: path.resolve(__dirname, './components')
    }
  ]]
}