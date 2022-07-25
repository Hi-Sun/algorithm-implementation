/**
 * 归并排序算法：
 * 将整个待排序序列划分成多个不可再分的子序列，每个子序列中仅有 1 个元素；
 * 所有的子序列进行两两合并，合并过程中完成排序操作，最终合并得到的新序列就是有序序列。
 * merge_sort() 用于将整个序列分割成多个子序列，merge() 用来合并这些子序列，合并的实现方式为：
 * 从 [p, mid] 和 [mid+1, q] 两个区域的元素分别拷贝到 leftarr 和 rightarr 区域。
 * 从 leftarr 和 rightarr 区域中各个取出第一个元素，比较它们的大小；
 * 将较小的元素拷贝到 [p, q] 区域，然后从较小元素所在的区域内取出下一个元素，继续进行比较；
 * 重复执行第 3 步，直至 leftarr 和 rightarr 内的元素全部拷贝到 [p, q] 为止。如果 leftarr 或者 rightarr 有一方为空，则直接将另一方的所有元素依次拷贝到 [p, q] 区域。
 * 时间复杂度O(nlogn)
 */

// 使用归并排序算法对 {14, 33, 27, 10, 35, 19, 42, 44} 完成升序排序
const mergeSort = (list: Array<number>) => {
  const _len = list.length;
  if (_len <= 1) {
    return list;
  }

  
}