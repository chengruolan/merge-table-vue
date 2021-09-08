/**
 *将树形结构得到有规律的扁平化数组
 * @param {Array} dataList 需要转换的数据
 * @param {String} excludeChar 最后一层数据 if(obj.excludeChar）转换 else 下一条数据
 * @returns 扁平后的数组
 * @author crl
 */

const flatObject = dataList => {
  let treeData = [];
  dataList.forEach(element => {
    BFCtreeData(element, {}, 1, treeData);
  });
  setMergeData(treeData);
  console.log(treeData);
  return treeData;
};

const setMergeData = dataList => {
  for (let i = dataList.length - 1; i > 0; i--) {
    let item = dataList[i],
      nextItem = dataList[i - 1];

    for (const key in item) {
      if (typeof item[key] == "object" && item[key] == nextItem[key]) {
        // item[key].rowSpan += 1;
        item[key] = null;
        item.parentIndex = i;
      }
    }
  }
};

//递归方式
const BFCtreeData = (tree, parentTree, index, treeData) => {
  console.log(tree, parentTree, index);
  parentTree[`layerIndexObj${index}`] = { ...tree, rowspan: 0 };
  if (tree.children && tree.children.length > 0) {
    tree.children.forEach(element => {
      BFCtreeData(element, parentTree, index + 1, treeData);
    });
  } else {
    for (const key in parentTree) {
      if (Object.hasOwnProperty.call(parentTree, key)) {
        if (typeof parentTree[key] == "object") {
          parentTree[key].rowspan += 1;
        }
      }
    }
    treeData.push({
      ...parentTree
    });
  }
};

export { flatObject, setMergeData, BFCtreeData };
