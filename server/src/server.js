const http = require("http");

const app = require("./app");

const PORT = process.env.PORT || 5000;

const server = http.Server(app);

server.listen(PORT, ()=> console.log("server running on port:", PORT));