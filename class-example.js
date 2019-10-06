/*
新的关键字class从ES6开始正式被引入到JavaScript中。class的目的就是让定义类更简单。
 */
// 非class方式定义Student类
function Student(props) {
  this.name = props.name || '匿名'
  this.age = props.age || 18
}
Student.prototype.speak = function() {
  console.log(`My name is ${this.name}, my age is ${this.age} !`)
}
// 使用class方式定义StudentClass类
class StudentClass {
  constructor(props) {
    this.name = props.name || '匿名'
    this.age = props.age || 18
  }
  speak() {
    console.log(`My name is ${this.name}, my age is ${this.age} !`)
  }
}
// 直接使用extends方式来继承
class PrimaryStudent extends StudentClass {
  constructor(props, grade) {
    super(props)
    this.grade = grade
  }
  getGrade() {
    console.log(`My name is ${this.name}, my age is ${this.age} , my grade is ${this.grade} !!!!`)
  }
}
// 验证继承关系
{
  const xiaoMing = new StudentClass(
    {
      name: '小明',
      age: '18'
    }
  )
  const xiaoLi = new PrimaryStudent(
    {
      name: '小李',
      age: '28'
    },
    99
  )
  xiaoMing.speak()
  // xiaoMing.getGrade() // 报错
  xiaoLi.speak()
  xiaoLi.getGrade()
  console.log(xiaoMing instanceof StudentClass)
  console.log(xiaoMing instanceof PrimaryStudent)
  console.log(xiaoLi instanceof StudentClass)
  console.log(xiaoLi instanceof PrimaryStudent)
}
/*
练习
请利用class重新定义Cat，并让它从已有的Animal继承，然后新增一个方法say()，返回字符串'Hello, xxx!'：
 */
class Animal {
  constructor(name) {
    this.name = name
  }
}
class Cat extends Animal {
  /* constructor(name) {
    super(name)
  }*/
  say() {
    return `Hello, ${this.name}!`
  }
}
{
  // 测试:
  const kitty = new Cat('Kitty')
  const doraemon = new Cat('哆啦A梦')
  if ((new Cat('x') instanceof Animal) && kitty && kitty.name === 'Kitty' && kitty.say && typeof kitty.say === 'function' && kitty.say() === 'Hello, Kitty!' && kitty.say === doraemon.say) {
    console.log('测试通过!')
  } else {
    console.log('测试失败!')
  }
}
