'use strict'
/*
node基本模块的操作示例
 */
const fs = require('fs')
fs.readFile('README.md', (err, data) => {
  if (err) {
    console.log(err)
  } else {
    console.log(data.toString())
  }
})
// stat函数执行比readFile快，所以会先输出
fs.stat('README.md', (err, stat) => {
  if (err) {
    console.log(err)
  } else {
    console.log(stat)
  }
})
// 输入输出流
const rs = fs.createReadStream('test.txt', 'utf-8')
rs.on('data', function(chunk) {
  console.log(chunk)
})
rs.on('end', () => {
  console.log('end')
})
rs.on('error', (err) => {
  console.log(err)
})
const ws = fs.createWriteStream('test2.txt', 'utf-8')
ws.write('使用Stream写入数据流\n')
ws.write('再写入一句\n')
ws.end()
// pipe操作示例
const ws2 = fs.createWriteStream('test3.txt', 'utf-8')
rs.pipe(ws2)
