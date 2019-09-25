'use strict' // 使用严格模式
// ES6 加强了对 Unicode 的支持,只要将码点放入大括号，就能正确解读该字符
console.log('\u{20BB7}') // "𠮷"
console.log('\u{41}\u{42}\u{43}') // "ABC"
console.log('\u{1F680}' === '\uD83D\uDE80') // true
console.log('\z' === 'z') // true
console.log('\x7A' === 'z') // true
console.log('\u007A' === 'z') // true
console.log('\u{7A}' === 'z') // true

// 字符串的遍历接口
for (const codePoint of 'foo') {
  console.log(codePoint)
}

// 模板字符串（template string）是增强版的字符串，用反引号（`）标识。它可以当作普通字符串使用，也可以用来定义多行字符串，或者在字符串中嵌入变量。
console.log(`模板字符串（template string）是增强版的字符串
用反引号（\`）标识。
它可以当作普通字符串使用，
也可以用来定义多行字符串，
或者在字符串中嵌入变量。`)

const name = '小明'
const age = 20
console.log(`你好, ${name}, 你今年${age}岁了!`)
