'use strict'
// 在JavaScript的世界里，一切都是对象。
// 但是某些对象还是和其他对象不太一样。为了区分对象的类型，我们用typeof操作符获取对象的类型，它总是返回一个字符串
console.log(typeof 123) // 'number'
console.log(typeof NaN) // 'number'
console.log(typeof 'str') // 'string'
console.log(typeof true) // 'boolean'
console.log(typeof undefined) // 'undefined'
console.log(typeof Math.abs) // 'function'
console.log(typeof null) // 'object'
console.log(typeof []) // 'object'
console.log(typeof {}) // 'object'

// 包装对象，包装对象使用new创建，但是，非常不推荐使用包装对象，因为有可能会出现下面的情况！
// typeof都是object
console.log('以下是包装对象的类型:')
console.log(typeof new Number(123)) // 'object'
console.log(typeof new Boolean(true)) // 'object'
console.log(typeof new String('包装对象')) // 'object'

// 数字转String,要用两个点
console.log(789.0.toString())
console.log((789).toString())

// Date对象
const now = new Date()
console.log(now)
console.log(now.getFullYear())
console.log(now.getMonth())
console.log(now.getDate())
console.log(now.getDay())
console.log(now.getHours())
console.log(now.getMinutes())
console.log(now.getSeconds())
console.log(now.getMilliseconds())
console.log(now.getTime())
const date = new Date(2019, 8, 29, 22, 18, 45, 123)
console.log(date)
