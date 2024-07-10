const http = require('http');

const express = require("express")

const app = express()

app.use((req, res, next) => {
  console.log("First Middleware")
  next()
})

app.use((req, res, next) => {
  console.log("Second Middleware")
})
// const routes = require("./routers")
// const server = http.createServer(routes.handler)

// server creation
// const server = http.createServer(app);

// server.listen(4000);

app.listen(4000)
