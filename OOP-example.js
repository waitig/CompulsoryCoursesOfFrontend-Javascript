'use strict'
// 对JS中面向对象的编程方式进行介绍
// Person
const personObject = {
  name: 'person',
  age: 18,
  height: 1.85,
  school: 'Beijing number 1 high school',
  skills: ['Javascript', 'Java', 'Python', 'PPT'],
  alive: true,
  speak: function() {
    console.log(`I am speaking! My name is ${this.name}`)
  }
}
// 建一个小明对象，继承自person
const xiaoMing = {
  name: 'xiao ming'
}
// 以下代码仅用于演示目的。在编写JavaScript代码时，不要直接用obj.__proto__去改变一个对象的原型！！！！
xiaoMing.__proto__ = personObject
xiaoMing.speak()
// 可以通过以下函数创建继承对象
function createPerson(name) {
  // 基于personObject原型创建一个新对象:
  const s = Object.create(personObject)
  // 初始化新对象:
  s.name = name
  return s
}
const xiaoLi = createPerson('小李')
xiaoLi.speak()
// 利用构造函数的方法来创建对象
function Person(name) {
  this.name = name
  this.speak = function() {
    console.log(`I am speaking! My name is ${this.name}`)
  }
}
// 注意，必须写new ，否则返回undefined
const daLiu = new Person('大刘')
// 此时的原型链为：daLiu ----> Person.prototype ----> Object.prototype ----> null
daLiu.speak()
// 用new Person()创建的对象还从原型上获得了一个constructor属性，它指向函数Person本身
// 要理解如下结果
console.log('用new Person()创建的对象还从原型上获得了一个constructor属性，它指向函数Person本身')
console.log(daLiu.constructor === Person.prototype.constructor)
console.log(Person.prototype.constructor === Person)
console.log(Object.getPrototypeOf(daLiu) === Person.prototype)
console.log(daLiu instanceof Person)
// 通过这种方式创建的对象，他们的属性及函数都是独立的，如下所示
const xiaoLiu = new Person('小刘')
console.log(daLiu.speak === xiaoLiu.speak) // false

// 这样非常浪费内存，所以我们可以用如下方式创建对象
function Student(props) {
  this.name = props.name || '匿名'
  this.age = props.age || 18
}
// 所有student对象的speak方法都指向同一个方法
Student.prototype.speak = function() {
  console.log(`用createStudent方法创建的对象! My name is ${this.name}, my age is ${this.age} !`)
}
function createStudent(props) {
  return new Student(props || {})
}
// 这样就可以用如下方式，快速又安全的创建对象了
const liMing = createStudent({
  name: '李明'
})
const liXiaoMing = createStudent({
  name: '李小明',
  age: 28
})
liMing.speak()
liXiaoMing.speak()
console.log(liMing.speak === liXiaoMing.speak)

/*
 请利用构造函数定义Cat，并让所有的Cat对象有一个name属性，并共享一个方法say()，返回字符串'Hello, xxx!'
 */
function Cat(name) {
  this.name = name
}
Cat.prototype.say = function() {
  return `Hello, ${this.name}!`
}
{
  // 测试:
  const kitty = new Cat('Kitty')
  const doraemon = new Cat('哆啦A梦')
  if (kitty && kitty.name === 'Kitty' && kitty.say && typeof kitty.say === 'function' && kitty.say() === 'Hello, Kitty!' && kitty.say === doraemon.say) {
    console.log('测试通过!')
  } else {
    console.log('测试失败!')
  }
}
