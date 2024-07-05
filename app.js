const http = require('http')



const server = http.createServer((req, res) => {
  // console.log("Athi")
  // console.log(req.headers,req.url,req.method)
  // process.exit()

  res.setHeader("Content-Type", "text/html")
  if (req.url === "/") {
    res.write("<html>");
    res.write("<head><title>My First Page </title></head>");
    res.write("<body><h1>Hello from my Node js server </h1></body>");

    res.write("</html>");
  } else if (req.url === "/home") {
    res.write("<html>");
    res.write("<head><title>My Home Page </title></head>");
    res.write("<body><h1> Welcome Home </h1></body>");
    res.write("</html>");
  } else if (req.url === "/about") {
    res.write("<html>");
    res.write("<head><title>My About Page </title></head>");
    res.write("<body><h1> Welcome About Us Page </h1></body>");
    res.write("</html>");
  } else if (req.url === "/node") {
    res.write("<html>");
    res.write("<head><title>Node Page </title></head>");
    res.write("<body><h1> Welcome to my Node Js project </h1></body>");
    res.write("</html>");
  }
  res.end();
})



server.listen(4000)
