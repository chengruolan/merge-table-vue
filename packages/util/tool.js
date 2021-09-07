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
    treeData.push(...objForIn(element, 1));
  });
  setMergeData(treeData);
  return treeData;
};
function objForIn(obj, index = 1, parentObj = {}, resultArr = []) {
  console.log(resultArr, index, parentObj);
  let hasNextArr = false;
  let nextArr = [];
  let objLayer = { treeObj: obj, rowSpan: 1, index: index };
  let resultObj = {
    ...parentObj

    // parentObj: parentObj,
    // childrenLenth: 0
  };
  resultObj[`layerIndexObj${index}`] = objLayer;

  for (const key in obj) {
    if (obj.hasOwnProperty.call(obj, key)) {
      const element = obj[key];
      if (Array.isArray(element) && element.length > 0) {
        hasNextArr = true;
        nextArr = element;
      } else {
        objLayer[key] = element;
      }
    }
  }

  resultArr.push(resultObj);
  if (hasNextArr) {
    arrForEach(nextArr, index + 1, resultObj, resultArr);
  } else {
    objLayer.rowSpan = 1;
    // resultArr.push(resultObj);
    // if (parentObj) parentObj.childrenLenth += 1;
  }
  return resultArr;
}
function arrForEach(arr, index, obj, resultArr) {
  arr.forEach(element => {
    objForIn(element, index, obj, resultArr);
  });
}

const setMergeData = dataList => {
  for (let i = dataList.length - 1; i > 0; i--) {
    let item = dataList[i],
      nextItem = dataList[i - 1];
    let count = 0;
    console.log(item);
    for (const key in item) {
      if (typeof item[key] == "object" && item[key] == nextItem[key]) {
        item[key].rowSpan += 1;
        item[key] = null;
        count++;
      }
    }
    item.layerIndex = count;

    // for (let arrIndex = 0; arrIndex < dataList[i].length; arrIndex++) {
    //   // if (item.layerIndex == 1) {
    //   // }
    //   console.log(item);
    // }
  }
};

export { flatObject, setMergeData };
