const http = require("http");

const server = http.createServer((request, response) => {
  if (request.url === "/") {
    response.sendFile();
    response.end();
  } else if (request.url === "/about") {
    response.write("You're in about page");
    response.end();
  } else {
    response.statusCode = 404;
    response.write("404 Page");
    response.end();
  }
});

server.listen(3000);
