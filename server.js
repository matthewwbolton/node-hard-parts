const http = require("http");
const fs = require("fs");

function doOnRequest(request, response) {
  // Send back a message saying "Welcome to Twitter"
  // code here...
  response.end("yo");
  if (request.method === "GET" && request.url === "/") {
    // read the index.html file and send it back to the client
    // code here...
    let homepage = fs.readFileSync("index.html", "utf-8");
    response.end(homepage);
  } else if (request.method === "GET" && request.url === "/styles.css") {
    let styling = fs.readFileSync("style.css", "utf-8");
    response.end(styling);
  } else if (request.method === "POST" && request.url === "/sayHi") {
    // code here...
    fs.appendFileSync("hi_log.txt", "Somebody said Hi!\n");
    response.end("saying hi right back to you!");
  } else if (request.method === "POST" && request.url === "/greeting") {
    // accumulate the request body in a series of chunks
    // code here...
  } else {
    // Handle 404 error: page not found
    // code here...
  }
}

const server = http.createServer(doOnRequest);

server.listen(3000);
