const http = require("http");

const server = http.createServer((req, resp) => {
    console.log("User hit the server");
    resp.end("Home page");
});

server.listen(5000);
