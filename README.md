# 前端必修课系列工程之javascript
>《前端必修课》是[Linux大学网](https://www.linuxdaxue.com)为前端同学量身打造的一系列必备技能合集，其中既包括经典的入门示例，也包括各类进阶技能，还有我在实际工作中总结的各种实用技巧及经验教训，希望能给大家带来帮助。

## 概述
本工程为《前端必修课》系列工程中的javascript部分，结合最新的ES6语法，基本囊括了在实际工作中常用的各类技术。

## 文件介绍
### ajax-example.html
纯js利用`XMLHttpRequest`手动实现Ajax示例，包括`JSONP`和`CORS`实现跨域的示例。

### class-example.js
js中类的用法示例，包括了使用`ES5`原始语法和`ES6`中 `class`关键字两种方式实现。
还包含类的继承实例。

### closure-example.js
闭包的用法示例，闭包的定义、常用用法及匿名函数立即执行等。

### dom-example.html
dom常用方法实例，利用dom原生方式获取元素，并对其进行各类操作。

### execution-sequence.js
js 执行顺序的简单示例，方便理解`async/await`、`Promise`、`setTimeout`之间执行顺序的不同。

### file-example.html
js 配合html5 操作文件示例

### form-example.html
纯js操作form表单示例

### function-example.js
js中常用高阶函数示例，包括`map`、`reduce`、`sort`、`find`、`foreach`、`every`、`filter`等函数，是前端人员必备的技能。

### generator-example.js
js 中 generator示例
generator（生成器）是ES6标准引入的新的数据类型。一个generator看上去像一个函数，但可以返回多次。
generator和函数不同的是，generator由function*定义（注意多出的*号），并且，除了return语句，还可以用yield返回多次。

### jquery-example.html
jquery 用法示例，通过简单的例子来了解jquery的用法。

### json-example.js
json的用法示例，包括`JSON.stringify` 及 `JSON.parse` 的用法。

### mvvm-example.html
利用纯js手动实现类似vue的数据的双向绑定功能，主要思想如下：
1. 实现一个监听器Observer，用来劫持并监听所有属性，如果有变动的，就通知订阅者。
2. 实现一个订阅者Watcher，可以收到属性的变化通知并执行相应的函数，从而更新视图。
3. 实现一个解析器Compile，可以扫描和解析每个节点的相关指令，并根据初始化模板数据以及初始化相应的订阅器。

### node-http-example.js
node的http模块用法示例

### node-module-example.js
node 的基本用法示例

### object-example.js
在JavaScript的世界里，一切都是对象。

本文件主要介绍js中的对象，必须熟练掌握。

### OOP-example.js
js中面向对象思想介绍，主要使用调用链`prototype`来实现。

### promise-async.js
用一个简单的例子来演示js在遇到`setTimeout`、`promise`、`async/await`关键词时的调用顺序，必须熟练掌握。

### promise-example.html
主要介绍ES6中的promise用法规范，并利用promise实现了ajax请求示例。
### prototype-inheritance.js
通过实例介绍基于原型链的继承方法
### regexp-example.js
介绍js中有关正则表达式的用法示例。
### string-example.js
介绍js中的字符串，包括es6的新用法。
### ws-client-example.html
websocket 客户端代码示例
### ws-server-example.js
websocket 服务端代码示例

