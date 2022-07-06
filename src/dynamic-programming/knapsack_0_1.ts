/**
 * 动态规划算法：先将问题拆分成多个简单的小问题，通过逐一解决这些小问题找到整个问题的答案
 */

/**
 * 0-1背包问题：所有物品不可再分，要么整个装入背包，要么放弃，不允许出现“仅选择物品的 1/3 装入背包”的情况；
 * 问题描述：商店中拥有 5 件商品，它们各自的重量和收益分别是：
 * 商品 1：重量 1 斤，收益 1 元；
 * 商品 2：重量 2 斤，收益 6 元；
 * 商品 3：重量 5 斤，收益 18 元；
 * 商品 4：重量 6 斤，收益 22 元；
 * 商品 5：重量 7 斤，收益 28 元。
 * 所有商品不可再分，背包只能装 11 斤商品，如何选择商品才能获得最大的收益呢？
 */
const knapsack_dp = (w: number[], p: number[], W: number) => {
  // 二维数组用于记录每个组合的价值,二维数组需要每个维度都初始化的, 如果只初始化了第一个维度, 其他维度直接使用还是会报错
  let result: Array<Array<number>> = new Array<Array<number>>();
  w.unshift(0);
  p.unshift(0);
  for (let i = 0; i < w.length; i++) {
    result[i] = [0];
    for (let j = 0; j < W; j++) {
      result[0][j] = 0;
    }
  }
  // console.log(result)
  for (let i = 1; i < w.length; i++) {
    for (let j = 1; j < W + 1; j++) {
      if (j < w[i]) {
        result[i][j] = result[i - 1][j];
      } else {
        result[i][j] = result[i - 1][j] > (p[i] + result[i - 1][j - w[i]]) ? result[i - 1][j] : (p[i] + result[i - 1][j - w[i]])
      }
    }
  }
  return result;
}
const valueArr = knapsack_dp([1, 2, 5, 6, 7], [1, 6, 18, 22, 28], 11);
// console.log(valueArr);
const len = valueArr.length;
const wlen = [1, 2, 5, 6, 7].length;
for (let i = 0; i < len; i++) {
  valueArr[i].shift();
}
valueArr.shift();
console.log(valueArr);
console.log(`最大收益为：${valueArr[wlen - 1][10]}`);
const select = (w: number[], p: number[], W: number, value: number[][]) => {
  let n = w.length - 1;
  //逐个商品进行判断
  while (n > 0) {
    //如果在指定承重下，该商品对应的收益和上一个商品对应的收益相同，则表明未选中
    if (value[n][W - 1] == value[n - 1][W - 1]) {
      n--;
    }
    else {
      //输出被选用商品的重量和价值
      console.log("(" + w[n] + "," + p[n] + ") ");
      //删除被选用商品的承重，以便继续遍历
      W = W - w[n];
      n--;
    }
  }
}
select([1, 2, 5, 6, 7], [1, 6, 18, 22, 28], 11, valueArr)

