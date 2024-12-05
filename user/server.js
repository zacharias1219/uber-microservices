const http = require("http");
const app = require("./app");

const server = http.createServer(app);

server.listen(3000, () => {
  console.log("Gateway is running on port 3000");
});