'use strict'
// 闭包：闭包是函数和声明该函数的词法环境的组合。

function makeAddFunction(x) {
  return function addFunction(y) {
    return x + y
  }
}
const maf = makeAddFunction(123)
const maf2 = makeAddFunction(456)
console.log(maf(321))
console.log(maf2(654))

// 利用闭包实现一个计数器
function Counter(initCount) {
  let privateCount = initCount || 0
  return {
    increment: function() {
      privateCount += 1
    },
    decrement: function() {
      privateCount -= 1
    },
    getValue: function() {
      return privateCount
    }
  }
}
// 两个counter中的变量是独立的
const counter = Counter(10)
const counter2 = Counter(100)
counter.increment()
counter2.increment()
console.log(counter.getValue())
console.log(counter2.getValue())
counter.decrement()
counter2.decrement()
console.log(counter.getValue())
console.log(counter2.getValue())

// 以下是一个错误的例子
function countError() {
  var arr = []
  for (var i = 1; i <= 3; i++) {
    arr.push(function() {
      return i * i
    })
  }
  return arr
}

const results = countError()
for (let index = 0; index < results.length; index++) {
  console.log(results[index]()) // 都是i 最后的状态
}

// 修改方法1，使用let将i改为局部变量
function countErrorFix1() {
  const arr = []
  for (let i = 1; i <= 3; i++) {
    arr.push(function() {
      return i * i
    })
  }
  return arr
}
const results1 = countErrorFix1()
for (let index = 0; index < results1.length; index++) {
  console.log(results1[index]()) // 都是i 最后的状态
}

// 修改方法2，使用闭包新增一层function
function countErrorFix2() {
  const arr = []
  for (var i = 1; i <= 3; i++) {
    arr.push(function(n) {
      return function() {
        return n * n
      }
    }(i))
  }
  return arr
}
const results2 = countErrorFix2()
for (let index = 0; index < results2.length; index++) {
  console.log(results2[index]()) // 都是i 最后的状态
}

// 匿名函数立即执行
(
  function(x) {
    console.log(x)
  }
)('这是匿名函数立即执行的例子！')
