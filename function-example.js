'use strict'
// 利用map reduce 将字符串转化为数字
function string2int(s) {
  let arr = []
  for (const tmp of s) {
    arr.push(tmp)
  }
  arr = arr.map(function(x) {
    return x - '0'
  })
  return arr.reduce(function(x, y) {
    return x * 10 + y
  })
}
function test_1() {
  // 测试:
  if (string2int('0') === 0 && string2int('12345') === 12345 && string2int('12300') === 12300) {
    if (string2int.toString().indexOf('parseInt') !== -1) {
      console.log('请勿使用parseInt()!')
    } else if (string2int.toString().indexOf('Number') !== -1) {
      console.log('请勿使用Number()!')
    } else {
      console.log('测试通过!')
    }
  } else {
    console.log('测试失败!')
  }
}
test_1()

// 把用户输入的不规范的英文名字，变为首字母大写，其他小写的规范名字。输入：['adam', 'LISA', 'barT']，输出：['Adam', 'Lisa', 'Bart']。
function normalize(arr) {
  return arr.map(function(x) {
    return x[0].toUpperCase() + x.substr(1).toLowerCase()
  })
}
function test_2() {
  // 测试:
  if (normalize(['adam', 'LISA', 'barT']).toString() === ['Adam', 'Lisa', 'Bart'].toString()) {
    console.log('测试通过!')
  } else {
    console.log('测试失败!')
  }
}

test_2()

// 实现对array的去重
function duplicateRemoval(arr) {
  return arr.filter((element, index, array) => {
    return array.indexOf(element) === index
  })
}

console.log(duplicateRemoval(['1', '2', '3', '5', '1', '8', '2']))

function get_primes(arr) {
  return arr.filter((element, index, array) => {
    if (element < 2) {
      return false
    }
    for (let i = 2; i * i <= element; i++) {
      if (element % i === 0) {
        return false
      }
    }
    return true
  })
}

function test_3() {
  // 测试:
  let x = []
  const arr = []
  for (x = 1; x < 100; x++) {
    arr.push(x)
  }
  const r = get_primes(arr)
  if (r.toString() === [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97].toString()) {
    console.log('测试通过!')
  } else {
    console.log('测试失败: ' + r.toString())
  }
}
test_3()

{
  const arr = ['Google', 'apple', 'Microsoft']
  arr.sort((s1, s2) => {
    const x1 = s1.toUpperCase()
    const x2 = s2.toUpperCase()
    if (x1 < x2) {
      return -1
    }
    if (x1 > x2) {
      return 1
    }
    return 0
  })
  console.log(arr)
  console.log(arr.every(function(s) {
    return s.length > 0
  }))

  console.log(arr.every(function(s) {
    return s.toLowerCase() === s
  }))

  console.log(arr.find(function(s) {
    return s.toLowerCase() === s
  }))

  console.log(arr.find(function(s) {
    return s.toUpperCase() === s
  }))

  console.log(arr.findIndex(function(s) {
    return s.toLowerCase() === s
  }))

  console.log(arr.findIndex(function(s) {
    return s.toUpperCase() === s
  }))

  arr.forEach(console.log) // 依次打印，参数为(element, index, array)
}
// 箭头函数
{
  const fn = x => x * x
  console.log(fn(5))
}
// 手动实现map函数
const primaryMap = function(callback, args) {
  // 如果调用为空，则报异常
  if (this === null) {
    throw new TypeError(' this is null or not defined')
  }
  // 初始化obj为调用的数组对象
  const obj = Object(this)
  // len为obj的长度
  const len = obj.length >>> 0
  // 判断callback是否为函数
  if (Object.prototype.toString.call(callback) !== '[object Function]') {
    throw new TypeError(callback + ' is not a function')
  }
  const newArray = new Array(len)
  for (let index = 0; index < len; index++) {
    const value = obj[index]
    newArray[index] = callback.call(value, index, obj)
  }
  return newArray
}
// 验证手动实现的Map函数
{
  const tempArray = [1, 2, 3, 4, 5]
  tempArray.__proto__.primaryMap = primaryMap
  console.log(tempArray.map(function(x) {
    return x + 100
  }))
}
