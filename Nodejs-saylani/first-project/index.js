const http = require('http');

const server = http.createServer((req, res) => {
    const method = req.method;
    const url = req.url;

    if (method === "GET") {
        res.end("hello world");
    }
})

server.listen(4000);