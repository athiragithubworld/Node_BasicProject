const http = require('http')



const server = http.createServer((req, res) => {
  console.log("Athi")
})

server.listen('4000')