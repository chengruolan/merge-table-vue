const table1Data = [
  {
    key: "1",
    name: "1",
    children: [
      {
        key: "1-1",
        name: "1-1",
        children: [
          {
            key: "1-1-1",
            name: "1-1-1"
          },
          {
            key: "1-1-2",
            name: "1-1-2"
          },
          {
            key: "1-1-3",
            name: "1-1-3"
          }
        ]
      },
      {
        key: "1-2",
        name: "1-2",
        children: [
          {
            key: "1-2-1",
            name: "1-2-1"
          }
        ]
      }
    ]
  },
  {
    key: "2",
    name: "2",
    children: [
      {
        children: []
      }
    ]
  }
];
const colums1 = [
  // { title: "key1", dataIndex: "key", layerIndex: 1 },
  { title: "名称1", dataIndex: "name", layerIndex: 1 },
  // { title: "key2", dataIndex: "key", layerIndex: 2 },
  { title: "名称2", dataIndex: "name", layerIndex: 2 },
  // { title: "key3", dataIndex: "key", layerIndex: 3 },
  { title: "名称3", dataIndex: "name", layerIndex: 3 }
];
export { table1Data, colums1 };
