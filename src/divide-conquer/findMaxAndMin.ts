/**
 * 分治算法：将问题划分成若干个小问题，分开处理，最后合并处理结果
 */

/**
 * 普通方法查找数组中的最大值和最小值
 */
const findMaxNomal = (arr: number[]): { maxNumber: number, minNumber: number } => {
  const length = arr.length;
  if (length === 0) {
    return {
      maxNumber: -1,
      minNumber: -1
    };
  }
  if (length === 1) {
    return {
      maxNumber: arr[0],
      minNumber: arr[0]
    };
  }
  let max = 0, min = 0;
  for (let i = 0; i < length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return {
    maxNumber: max,
    minNumber: min
  }
}

/**
 * 分治算法查找数组中的最大值和最小值
 * 思路：利用迭代的思想，将数组分成若干个由两个元素组成的小数组，比较两个小数组中的最大值，再最后比较最大值
 */
const findMaxDivideConquer = (arr: Array<number>): { maxNumber: number, minNumber: number } => {
  const length = arr.length;
  if (length === 0) {
    return {
      maxNumber: -1,
      minNumber: -1
    };
  } else if (length === 1) {
    return {
      maxNumber: arr[0],
      minNumber: arr[0],
    };
  }
  const middle = length / 2;
  const left = findMaxDivideConquer(arr.slice(0, middle));
  const right = findMaxDivideConquer(arr.slice(middle));
  return {
    maxNumber: left.maxNumber > right.maxNumber ? left.maxNumber : right.maxNumber,
    minNumber: left.minNumber < right.minNumber ? left.minNumber : right.minNumber,
  }
}

// 调用方法求数组[2,4,-3,32,1,5,76,17]中的最大值和最小值
const result = findMaxNomal([2, 4, -3, 32, 1, 5, 76, 17]);
console.log(`result is : ${JSON.stringify(result)}`);
const maxResult = findMaxDivideConquer([2, 4, -3, 32, 1, 5, 76, 17]);
console.log(`maxResult is : ${JSON.stringify(maxResult)}`);