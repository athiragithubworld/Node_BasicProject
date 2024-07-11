const http = require('http');

const express = require("express")
const parser = require('body-parser');
const bodyParser = require('body-parser');

const app = express()

const adminRoutes = require("./routes/admin")

const shopRoutes = require("./routes/shop")

app.use(bodyParser.urlencoded({extended: false}))

app.use('/admin',adminRoutes);
app.use("/shop",shopRoutes);

app.use((req, res, next) => {
  res.status(404).send('<h1>Page Not Found </h1>')
})

// const routes = require("./routers")
// const server = http.createServer(routes.handler)

// server creation
// const server = http.createServer(app);

// server.listen(4000);

app.listen(4000)
