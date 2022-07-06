/**
 * 冒泡排序：不断的比较相邻的两个数，交互其位置，使得最后的数最大/最小，此时的序列就像一串泡泡一样，从小到大(从大到小)
 * 冒泡排序的时间复杂度为O(n^2)
 */

// 利用冒泡排序算法求得{14, 33, 27, 35, 10} 序列中的最大值
const bubbleSort = (list: Array<number>): Array<number> => {
  const length = list.length;
  if (length <= 1) {
    return list;
  }
  for (let i = 0; i < length; i++) {
    for (let j = i + 1; j < length; j++) {
      if (list[j] < list[i]) {
        let temp = list[j];
        list[j] = list[i];
        list[i] = temp;
      }
    }
  }
  return list;
}

const listSort = bubbleSort([14, 33, 27, 35, 10]);

console.log(`序列{14, 33, 27, 35, 10}经过冒泡排序后为${listSort}`)

console.log(`最大值为：${listSort[listSort.length - 1]}`)