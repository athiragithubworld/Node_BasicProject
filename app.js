const http = require('http');

const express = require("express")
const parser = require('body-parser');
const bodyParser = require('body-parser');

const app = express()

app.use(bodyParser.urlencoded({extended: false}))

app.use("/add-product",(req, res, next) => {
  console.log("First Middleware")
  res.send(
    '<form action="/product" method="POST"><input type="text" name="title"><input type="number" name="size"><button type="submit" >Add Product</button></form>'
  );
  // next()
})

app.use("/product", (req, res, next) => {
  
  console.log(req.body)
  res.redirect('/')
})
// const routes = require("./routers")
// const server = http.createServer(routes.handler)

// server creation
// const server = http.createServer(app);

// server.listen(4000);

app.listen(4000)
