'use strict'
// js中正则表达式简单示例
/*
 \d 一个数字
 \w 一个字母或数字
 \s 一个空格
 . 任意字符
 * 任意个，包括0个
 + 至少一个字符
 ? 0个或1个字符
 {n} n个字符
 {n,m} n-m个字符
 | 或
 ^ 行的开头
 $ 行的结尾
 [] 范围
 () 提取括号内分组的值
 [0-9a-zA-z\_] 匹配【一个】数字或者大小写字符或者下划线
 [0-9a-zA-z\_]+ 匹配【至少一个】数字或者大小写字符或者下划线，如： 'ab123','123_ab','ab_123'
 [a-zA-Z\_\$][0-9a-zA-Z\_\$]* 匹配由字母或下划线、$开头，后接任意个由一个数字、字母或者下划线、$组成的字符串，也就是JavaScript允许的变量名；
 /g 全局搜索
 /i 忽略大小写
 /m 多行匹配
 */
// 有以下两种写法,推荐第一种
const re1 = /[J|j]ava[S|s]cript/
const re2 = new RegExp('[J|j]ava[S|s]cript')
console.log(re1.test('javascript'))
console.log(re2.test('JavaScript'))
console.log(re1.test('TypeScript'))
// 可以利用正则来切分字符串,例如：根据空格和分号及逗号切分给定字符串
const reSplit = /[\s\,\;]*/
console.log('a,b;c d;;e,,,, f,g'.split(reSplit))
// 提取邮箱的前缀和后缀,此为简单示例，可能不严谨
const mailReg = /(^\w+\.?\w*)@(\w+\.\w+$)/
console.log(mailReg.test('123@qq.com'))
console.log(mailReg.test('a@qq.com'))
console.log(mailReg.test('-123@q$.com'))
console.log(mailReg.exec('123456@qq.com'))
// 正则匹配默认采用贪婪匹配，加? 可以采用非贪婪匹配,体会一下两个正则的区别
const numberReg = /^(\d+)(0*)$/
const numberReg2 = /^(\d+?)(0*)$/
console.log(numberReg.exec('12300'))
console.log(numberReg2.exec('12300'))
// 使用g可以表示全局搜索,i表示忽略大小写，m执行多行匹配
const globalReg = /\w+[s|S]cript\w*/g
const testString = 'JavaScript, VBScript, JScript and ECMAScript'
console.log(globalReg.exec(testString))
console.log(globalReg.lastIndex)
console.log(globalReg.exec(testString))
console.log(globalReg.lastIndex)
console.log(globalReg.exec(testString))
console.log(globalReg.lastIndex)
console.log(globalReg.exec(testString))
console.log(globalReg.lastIndex)
const globalReg2 = /\w+[s|S]cript\w*/m
console.log(globalReg2.exec(testString))
