const express = require("express")
import routes from "./src/network";

const server = express();
routes(server)

const port = 9000;

const initialize = () => {
    console.log(`Hola, ${port}`);
}


routes(server);



server.listen(port, initialize);