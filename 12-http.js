// how to run
// run the file
// go to web write localhost:port_name

const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("HEllo this is our home page");
  }
  if (req.url === "/about") {
    res.end(
      "My self Abhishek and i created this server on 24-july-24 at 9:39 pm "
    );
  }
  res.end(`<h1>Oops !</h1>
  <p>This page does not exist now we are Currently working on it .</p>  
  <a href="/">Back Home</a>
  <a href="/about">About</a>
  `);
});

server.listen(5000);
