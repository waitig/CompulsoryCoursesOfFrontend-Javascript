'use strict'
// JSON是JavaScript Object Notation的缩写，它是一种数据交换格式。
// 建一个json类型的对象
const personJson = {
  name: 'xiaoming',
  age: 18,
  height: 1.85,
  school: 'Beijing number 1 high school',
  skills: ['Javascript', 'Java', 'Python', 'PPT'],
  alive: true
}
// json类型
console.log(personJson)
// 输出json的String类型
console.log(JSON.stringify(personJson))
// 要输出得好看一些，可以加上参数，按缩进输出：
console.log(JSON.stringify(personJson, null, '  '))
// 第二个参数用于控制如何筛选对象的键值，如果我们只想输出指定的属性，可以传入Array：
console.log(JSON.stringify(personJson, ['name', 'skills'], '  '))
// 还可以传入一个函数，这样对象的每个键值对都会被函数先处理：
function convert(key, value) {
  if (typeof value === 'string') {
    return value.toUpperCase()
  }
  return value
}
console.log(JSON.stringify(personJson, convert, '  '))
// 使用JSON.parse函数来讲json字符串转化成Json对象
const personStr = JSON.stringify(personJson)
console.log(personStr)
console.log(typeof personStr)
const personStrParse = JSON.parse(personStr)
console.log(personStrParse)
console.log(typeof personStrParse)
// JSON.parse也可以接受一个函数
console.log(JSON.parse(personStr, convert))
