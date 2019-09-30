'use strict'
// 原型链的继承
/*
 在传统的基于Class的语言如Java、C++中，继承的本质是扩展一个已有的Class，并生成新的Subclass。
 由于这类语言严格区分类和实例，继承实际上是类型的扩展。但是，JavaScript由于采用原型继承，我们无法直接扩展一个Class，因为根本不存在Class这种类型。
 */
function Student(props) {
  this.name = props.name || '匿名'
  this.age = props.age || 18
}
Student.prototype.speak = function() {
  console.log(`My name is ${this.name}, my age is ${this.age} !`)
}
// PrimaryStudent构造函数:
function PrimaryStudent(props) {
  Student.call(this, props)
  this.grade = props.grade || 1
}

// 空函数F:
function F() {
}

// 把F的原型指向Student.prototype:
F.prototype = Student.prototype

// 把PrimaryStudent的原型指向一个新的F对象，F对象的原型正好指向Student.prototype:
PrimaryStudent.prototype = new F()

// 把PrimaryStudent原型的构造函数修复为PrimaryStudent:
PrimaryStudent.prototype.constructor = PrimaryStudent

// 继续在PrimaryStudent原型（就是new F()对象）上定义方法：
PrimaryStudent.prototype.getGrade = function() {
  return this.grade
}

// 创建xiaoming:
const xiaoming = new PrimaryStudent({
  name: '小明',
  grade: 2
})
console.log(xiaoming.name) // '小明'
console.log(xiaoming.grade) // 2

// 验证原型:
console.log(xiaoming.__proto__ === PrimaryStudent.prototype) // true
console.log(xiaoming.__proto__.__proto__ === Student.prototype) // true

// 验证继承关系:
console.log(xiaoming instanceof PrimaryStudent) // true
console.log(xiaoming instanceof Student) // true

