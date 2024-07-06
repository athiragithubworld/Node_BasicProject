const http = require('http');
const fs = require('fs');

let msg = "";


const server = http.createServer((req, res) => {
  // console.log("Athi")
  // console.log(req.headers,req.url,req.method)
  // process.exit()
  const url = req.url;
  const method = req.method;
  
  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>Message </title></head>");
    res.write(
      `<body><form action="/message" method="POST"><h1>${msg}</h1><input type="text" name="message" /><button type="submit">Send</button></form></body>`
    );
    res.write("</html>");
    return res.end();
  }
  if (url === '/message' && method === "POST") {

    const body = [];
    req.on('data', (chunk) => {
      body.push(chunk)
    })

    return req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();   
      const message = parsedBody.split('=')[1]
      // console.log(message, "parsedbody");
      msg = message
      fs.writeFile("/", message, (err) => {
        res.statusCode = 302;
       
         res.setHeader("Location", "/");
         return res.end();
      });
      
    })

    
   
  }

   res.setHeader("Content-Type", "text/html");
  
     res.write("<html>");
     res.write("<head><title>My First Page </title></head>");
     res.write("<body><h1>Hello from my Node js server </h1></body>");

     res.write("</html>");
   
  
  // else if (req.url === "/home") {
  //   res.write("<html>");
  //   res.write("<head><title>My Home Page </title></head>");
  //   res.write("<body><h1> Welcome Home </h1></body>");
  //   res.write("</html>");
  // } else if (req.url === "/about") {
  //   res.write("<html>");
  //   res.write("<head><title>My About Page </title></head>");
  //   res.write("<body><h1> Welcome About Us Page </h1></body>");
  //   res.write("</html>");
  // } else if (req.url === "/node") {
  //   res.write("<html>");
  //   res.write("<head><title>Node Page </title></head>");
  //   res.write("<body><h1> Welcome to my Node Js project </h1></body>");
  //   res.write("</html>");
  // }
  res.end();
})



server.listen(4000)
