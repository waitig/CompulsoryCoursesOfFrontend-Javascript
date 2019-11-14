'use strict'
// 用一个简单例子来说明es5、6、2017的区别
// 改造下列三个步骤，使之按照step1、2、3顺序输出,并在最后输出他们总共的运行耗时
function step1() {
  setTimeout(function() {
    console.log('step 1 is done ! It take 3 second...')
  }, 3000)
}
function step2() {
  setTimeout(function() {
    console.log('step 2 is done ! It take 2 second...')
  }, 2000)
}
function step3() {
  setTimeout(function() {
    console.log('step 3 is done ! It take 1 second...')
  }, 1000)
}
const time = Date.now()
function default_test() {
  console.log('默认执行顺序')
  step1()
  step2()
  step3()
  const time2 = Date.now()
  console.log('默认执行顺序，共耗时：' + (time2 - time).toString() + 'ms')
}

// 使用es5改造
function step1_es5() {
  setTimeout(function() {
    console.log('step1_es5 is done ! It take 3 second...')
    step2_es5()
  }, 3000)
}
function step2_es5() {
  setTimeout(function() {
    console.log('step2_es5 is done ! It take 2 second...')
    step3_es5()
  }, 2000)
}
function step3_es5() {
  setTimeout(function() {
    console.log('step3_es5 is done ! It take 1 second...')
    const time3 = Date.now()
    console.log('使用es5 改造后执行完毕，共耗时：' + (time3 - time).toString() + 'ms')
  }, 1000)
}
function es5_test() {
  console.log('使用es5 改造后...')
  step1_es5()
}

// 使用es6的promise语法改造
function step1_es6() {
  return new Promise((resolve, reject) => {
    setTimeout(function() {
      console.log('step1_es6 is done ! It take 3 second...')
      resolve()
    }, 3000)
  })
}
function step2_es6() {
  return new Promise((resolve, reject) => {
    setTimeout(function() {
      console.log('step2_es6 is done ! It take 2 second...')
      resolve()
    }, 2000)
  })
}
function step3_es6() {
  return new Promise((resolve, reject) => {
    setTimeout(function() {
      console.log('step3_es6 is done ! It take 1 second...')
      resolve()
    }, 1000)
  })
}
function es6_test() {
  console.log('使用es6 promise改造后...')
  step1_es6().then(step2_es6)
    .then(step3_es6)
    .then(() => {
      const time4 = Date.now()
      console.log('使用es6 promise改造后执行完毕，共耗时：' + (time4 - time).toString() + 'ms')
    })
}
// 使用es2017 async await语法改造
async function step1_es7() {
  return new Promise((resolve, reject) => {
    setTimeout(function() {
      console.log('step1_es6 is done ! It take 3 second...')
      resolve()
    }, 3000)
  })
}
async function step2_es7() {
  return new Promise((resolve, reject) => {
    setTimeout(function() {
      console.log('step2_es6 is done ! It take 2 second...')
      resolve()
    }, 2000)
  })
}
async function step3_es7() {
  return new Promise((resolve, reject) => {
    setTimeout(function() {
      console.log('step3_es6 is done ! It take 1 second...')
      resolve()
    }, 1000)
  })
}
async function es7_test() {
  console.log('使用es2017 async await语法改造后...')
  await step1_es7()
  await step2_es7()
  await step3_es7()
  const time2 = Date.now()
  console.log('使用es2017 async await语法改造后执行完毕，共耗时：' + (time2 - time).toString() + 'ms')
}
es7_test()
