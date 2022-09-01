module.exports = {
  '/components/': [
    {
      title: '基础组件',
      collapsable: true, //是否默认展开
      children: [
        {
          title: '常用组件',
          collapsable: false, //是否默认展开
          children: [
            'Button/base', // 按钮
            'Icon/base', // ICON
          ],
        },
      ],
    },
  ],
}
