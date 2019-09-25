const { log } = console

// ES6 加强了对 Unicode 的支持,只要将码点放入大括号，就能正确解读该字符
log('\u{20BB7}') // "𠮷"
log('\u{41}\u{42}\u{43}') // "ABC"
log('\u{1F680}' === '\uD83D\uDE80') // true
log('\z' === 'z') // true
log('\x7A' === 'z') // true
log('\u007A' === 'z') // true
log('\u{7A}' === 'z') // true

// 字符串的遍历接口
for (const codePoint of 'foo') {
  log(codePoint)
}

