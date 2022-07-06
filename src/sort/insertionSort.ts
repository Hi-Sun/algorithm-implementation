/**
 * 插入排序算法：初始状态下，将待排序序列中的第一个元素看作是有序的子序列。
 * 从第二个元素开始，在不破坏子序列有序的前提下，将后续的每个元素与子序列中的元素做对比，插入到子序列中的适当位置
 * 时间复杂度为O(n^2)
 */

// 利用插入排序算法求得序列{14, 33, 27, 10, 35, 19, 42, 44}中的最小值
const insertionSort = (list: Array<number>) => {
  const length = list.length;
  if (length <= 1) {
    return list;
  }
  for (let i = 1; i < length; i++) {
    let ele = list[i];
    for (let j = i - 1; j >= 0; j--) {
      if (list[j] > ele) {  // 升序排列
        const temp = list[j];
        list[j] = list[j + 1];
        list[j + 1] = temp;
      } else {
        break;
      }
    }
  }
  return list;
}

const sortList = insertionSort([14, 33, 27, 10, 35, 19, 42, 44])
console.log(`插入排序算法后的序列为：${sortList}`);
console.log(`最大值为：${sortList[sortList.length-1]}，最小值为：${sortList[0]}`);

