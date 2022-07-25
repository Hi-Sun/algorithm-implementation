/**
 * 希尔排序算法(缩小增量排序算法)是一种更高效的插入排序算法。
 * 和普通的插入排序算法相比，希尔排序算法减少了移动元素和比较元素大小的次数，从而提高了排序效率。
 * 希尔排序算法的实现思路是：
 * 1.将待排序序列划分成多个子序列，使用普通的插入排序算法对每个子序列进行排序；
 * 2.按照不同的划分标准，重复执行第一步；
 * 3.使用普通的插入排序算法对整个序列进行排序。
 * 希尔排序算法没有固定的划分标准,待排序序列如何进行划分，划分多少次，都会影响到希尔排序算法的执行效率，通常采用以下方法
 *  interval初始值为1，
 *  计算最大间隔
    while interval < (length / 3):
        interval = interval * 3 + 1
 */


//利用希尔排序算法对 {35, 33, 42, 10, 14, 19, 27, 44} 做升序排序
const shellSort = (list: Array<number>): Array<number> => {
  const _len = list.length;
  if (_len <= 1) {
    return list;
  }
  // 初始值为1
  let interval = 1;
  // 计算最大间隔
  while (interval < (_len / 3)) {
    interval = interval * 3 + 1;
  };

  // 根据间隔数，不断划分序列，并对各子序列排序
  while (interval > 0) {
    for (let i = interval; i < _len; i++) {
      const temp = list[i]; let j = i;
      while (j > interval - 1 && list[j - interval] >= temp) {
        list[j] = list[j - interval];
        j -= interval;
      }
      if (j != i) {
        list[j] = temp;
      }
    }
    // 计算新的间隔数，继续划分序列
    interval = (interval - 1) / 3;
  }
  return list

}
console.log(shellSort([35, 33, 42, 10, 14, 19, 27, 44]))