'use strict'
/*
实现一个简单的websocket服务器
 */
// 导入WebSocket模块:
const WebSocket = require('ws')

// 引用Server类:
const WebSocketServer = WebSocket.Server

// 实例化:
const wss = new WebSocketServer({
  port: 3000
})
let interval = null
wss.on('connection', (ws) => {
  console.log('Client connected')
  ws.on('message', (message) => {
    console.log(`[SERVER] Received: ${message}`)
    ws.send(`服务器收到的消息: ${message}`, (err) => {
      if (err) {
        console.log(`[SERVER] error: ${err}`)
      }
    })
  })
  interval = setInterval(() => {
    const str = '这是服务器主动推送给前端的消息！！！！当前时间是：' + Date.now() + '\n'
    ws.send(str, (err) => {
      if (err) {
        console.log(err)
      }
    })
  }, 3000)
})
wss.on('disconnect', (ws) => {
  console.log('Client disconnect')
  clearInterval(interval)
})
wss.on('close', (ws) => {
  console.log('Client close')
  clearInterval(interval)
})
console.log('Server started in port: 3000')
