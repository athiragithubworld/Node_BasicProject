
const fs = require("fs");



let msg = "";

const requestHandler = (req, res) => {
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

  if (url === "/message" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
    });

    return req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      debugger;
      const message = parsedBody.split("=")[0];
      console.log(parsedBody);

      // Add error handling
      try {
        msg = message;
        fs.writeFile("message.txt", message, (err) => {
          if (err) {
            console.error("Error writing file:", err);
            res.statusCode = 500;
            res.end("Internal Server Error");
            return;
          }
          res.statusCode = 302;
          res.setHeader("Location", "/");
          return res.end();
        });
      } catch (error) {
        console.error("Error processing request:", error);
        res.statusCode = 500;
        res.end("Internal Server Error");
      }
    });
  } else {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>My First Page </title></head>");
    res.write("<body><h1>Hello from my Node js server </h1></body>");
    res.write("</html>");
    res.end();
  }
};

exports.handler = requestHandler;
