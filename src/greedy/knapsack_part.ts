/**
 * 贪心算法：注重的是每一步选择最优的解决方案（又称“局部最优解”），并不关心整个解决方案是否最优
 * 贪心算法每一步都是最优的解决方案，但整个算法并不一定是最优的
 */

/**
 * 部分背包问题：所有物品是可再分的，即允许将某件物品的一部分（例如 1/3）放入背包；
 * 问题描述：有 3 种商品，它们各自的重量和收益是：
 * 商品 1：重量 10 斤，收益 60 元；
 * 商品 2：重量 20 斤，收益 100 元；
 * 商品 3：重量 30 斤，收益 120 元。
 * 一个背包最大容量是50斤，怎样选择物品使得收益最大？
 */

/**
 * 贪心算法思路：计算每个商品的收益率（收益/重量），优先选择收益率最大的商品，直至所选商品的总重量达到 50 斤
 * w: 存储各个商品的重量，p: 存储各个商品的收益，W: 表示背包的承重 60 + 100 + 80
 */
let gain: any[] = [];
const knapsack_recursion = (w: number[], p: number[], W: number) => {
  let goodMap = new Map();
  let maxValueGood = 0;
  for (let i = 0; i < w.length; i++) {
    goodMap.set(i, p[i] / w[i]);
  }
  for (let key in goodMap) {
    if (goodMap.get(key) > maxValueGood) {
      maxValueGood = goodMap.get(key);
    }
  }
  if (W > w[maxValueGood]) {
    gain.push({
      value: p[maxValueGood],
      rate: goodMap.get(maxValueGood),
      weight: w[maxValueGood],
      pack: w[maxValueGood],
      total: goodMap.get(maxValueGood) * w[maxValueGood]
    })
    gain.push(goodMap.get(maxValueGood) * w[maxValueGood]);
    p.splice(maxValueGood, 1);
    const next = w.splice(maxValueGood, 1)[0];
    knapsack_recursion(w, p, W - next);
  } else {
    gain.push({
      value: p[maxValueGood],
      rate: goodMap.get(maxValueGood),
      weight: w[maxValueGood],
      pack: W,
      total: W * goodMap.get(maxValueGood)
    })
  }
}
knapsack_recursion([10, 20, 30], [60, 100, 120], 50);
console.log(gain);

// 对重量和收益数组按照收益率排序
const sort = (arr1: Array<number>, arr2: Array<number>) => {
  const goodsRate = [];
  for (let i = 0; i < arr1.length; i++) {
    goodsRate.push(arr2[i] / arr1[i]);
  }
  for (let i = 0; i < arr1.length; i++) {
    for (let j = i + 1; j < arr1.length; j++) {
      if (goodsRate[i] < goodsRate[j]) {
        let temp = arr1[j];
        arr1[j] = arr1[i];
        arr1[i] = temp;
        temp = arr2[j];
        arr2[j] = arr2[i];
        arr2[i] = temp;
        temp = goodsRate[j];
        goodsRate[j] = goodsRate[i];
        goodsRate[i] = temp;
      }
    }
  }
  return {
    weight: arr1,
    value: arr2,
    rate: goodsRate
  }
}

const knapsack = (w: number[], p: number[], W: number) => {
  const sortResult = sort(w, p);
  const weight = sortResult.weight;
  const value = sortResult.value;
  const rate = sortResult.rate;
  let result = [], i = 0;
  while (W > 0) {
    let temp = W > weight[i] ? weight[i] : W;
    result[i] = {
      value: value[i],
      rate: rate[i],
      weight: weight[i],
      pack: temp,
      total: temp * rate[i]
    };
    W -= temp;
    i++;
  }
  return result;
}
console.log(knapsack([10, 20, 30], [60, 100, 120], 50));
// const knapsackResult = knapsack([10, 20, 30], [60, 100, 120], 50);
// let totalValue = 0;
// for (let i = 0; i < knapsackResult.length; i++) {
//   totalValue += knapsackResult[i].total;
// }
// console.log(totalValue);
