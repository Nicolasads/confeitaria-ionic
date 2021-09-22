//json.server
var jsServer = require("json-server");
var server = jsServer.create();
var path = require("path");
var router = jsServer.router(path.join(__dirname, "database.json"));
var middlewares = jsServer.defaults();

server.use(middlewares);
server.use(router);
server.listen(8080, console.log("rodando"));
