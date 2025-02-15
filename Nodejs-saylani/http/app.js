const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
  const method = req.method;
  const path = url.parse(req.url, true);
  console.log(path.pathname);

  if (method === "GET" && path.pathname === "/") {
    res.end(JSON.stringify({ hello: "world" }));
  } else if (method === "POST" && path.pathname === "/users") {
    let response = {
      id: 1,
      name: "zaz",
    };
    res.end(JSON.stringify(response));
  } else if (method === "POST" && path.pathname === "/user-create") {
    let body = ""; 
    req.on("data", (chunk) => {
      body += chunk;  
    });
    req.on("end", () => {
      console.log(body);
      res.end(JSON.stringify({ message: "user created" }));
    });
  } else if (method === "DELETE" && path.pathname === "/user-delete") {
    res.end(JSON.stringify({ message: "user deleted" }));
  } else {
    res.end("page not found");
  }
});

server.listen(4000, () => {
  console.log("server is listening on port 4000");
});
