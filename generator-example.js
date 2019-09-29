'use strict'
// generator示例
// generator（生成器）是ES6标准引入的新的数据类型。一个generator看上去像一个函数，但可以返回多次。
// generator和函数不同的是，generator由function*定义（注意多出的*号），并且，除了return语句，还可以用yield返回多次。
// 简单示例
function * foo(x) {
  yield x + 1
  yield x + 2
  return x + 3
}
console.log(foo(100).next())

// 经典示例，使用generator写斐波那契数列
function * fib(max) {
  let n = 0
  let a = 0
  let b = 1
  while (n < max) {
    yield a;
    [a, b] = [b, a + b]
    n++
  }
}
// 调用
{
  const fib_test = fib(5)
  // generator生成的函数可以用 of 来遍历
  for (const tmp of fib_test) {
    console.log(tmp)
  }
}

// 注：不使用generator，直接返回第n层
function fib_normal(max) {
  let n = 0
  let a = 0
  let b = 1
  const arr = []
  while (n < max) {
    arr.push(a);
    [a, b] = [b, a + b]
    n++
  }
  return arr
}
// 调用
{
  const fib_test = fib_normal(5)
  console.log(fib_test)
}
// 利用generator写一个自增的计数器
function * counter(initCount) {
  let privateCount = initCount
  while (true) {
    yield privateCount
    privateCount += 1
  }
}
// 调用
{
  const counter_test = counter(100)
  console.log(counter_test.next())
  console.log(counter_test.next())
}

