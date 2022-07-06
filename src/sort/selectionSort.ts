/**
 * 选择排序算法：每次从待排序序列中找出最大值或最小值，查找过程重复 n-1 次。
 * 对于每次找到的最大值或最小值，通过交换元素位置的方式将它们放置到适当的位置，最终使整个序列变成有序序列。
 * 升序排列时，每次查找待排序序列中的最小值的位置，然后交换位置将每次查找到的最小值按照从前到后的顺序放在序列前面
 * 时间复杂度：O(n^2)
 */

// 使用选择排序算法对 {14, 33, 27, 10, 35, 19, 42, 44} 完成升序排序
const slectionSort = (list: Array<number>) => {
  const length = list.length;
  if (length <= 1) {
    return list;
  }
  for (let i = 0; i < length - 1; i++) {
    let min = i;
    for (let j = i + 1; j < length; j++) {
      if (list[min] > list[j]) {
        min = j;
      }
    }
    if(min !== i){
      const temp = list[i];
      list[i] = list[min];
      list[min] = temp;
    }
  }
  return list;
}
const listArr = slectionSort([14, 33, 27, 10, 35, 19, 42, 44])
console.log(`插入排序算法后的序列为：${listArr}`);