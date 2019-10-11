'use strict'
const http = require('http')
const url = require('url')
const fs = require('fs')
// 创建http server，并传入回调函数:
// 下面的例子中，可以从页面中展示当前路径下的文件，并且支持点击查看
const server = http.createServer(function(request, response) {
  // 回调函数接收request和response对象,
  // 获得HTTP请求的method和url:
  console.log(request.method + ': ' + request.url)
  const pathname = url.parse(request.url).pathname
  console.log(request.method + ': ' + pathname)
  const localPathname = '.' + pathname
  fs.stat(localPathname, (err, stat) => {
    if (err) {
      response.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' })
      response.end(localPathname + '文件不存在！')
    } else {
      if (stat && stat.isDirectory()) {
        fs.readdir(localPathname, (err, data) => {
          if (err) {
            response.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' })
            console.log(err)
            response.end(localPathname + '文件不存在！')
          } else {
            response.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' })
            let htmlStr = ''
            data.map((x) => {
              htmlStr += `<li><a href="./${x}">${x}</a></li>`
            })
            console.log('<ul>' + htmlStr + '</ul>')
            response.end('<ul>' + htmlStr + '</ul>')
          }
        })
      } else {
        response.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' })
        fs.createReadStream(localPathname).pipe(response)
      }
    }
  })
})

// 让服务器监听8080端口:
server.listen(8080)

console.log('Server is running at http://127.0.0.1:8080/')
