/**
 * 斐波那契数列特征
 * 前两个数的值分别为 0 、1 或者 1、1；
 * 从第 3 个数字开始，它的值是前两个数字的和；
 * 递归：自身函数调用；迭代：利用变量的原值推算出变量的一个新值
*/

/**
 * 递归生成斐波那契数列 1 1 2 3 5 8 13 21 34 ...
 */
const recursionFib = (index: number): number => {
  if (index === 1 || index === 2) {
    return 1;
  } else {
    return recursionFib(index - 1) + recursionFib(index - 2);
  }
}

/**
 * 迭代生成斐波那契数列 1 1 2 3 5 8 13 21 34 ...
 */
const iterationFib = (index: number): number => {
  if (index === 1 || index === 2) {
    return 1
  } else {
    let f1 = 1, f2 = 1, f3 = 0;
    for (let i = 2; i < index; i++) {
      f3 = f1 + f2;
      f1 = f2;
      f2 = f3;
    }
    return f3
  }
}

// 调用，打印从1-10位斐波那契数列
for (let i = 1; i <= 10; i++){
  console.log(recursionFib(i));
}
for (let i = 1; i <= 10; i++){
  console.log(iterationFib(i));
}