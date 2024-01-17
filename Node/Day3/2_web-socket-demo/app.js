const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    fs.readFile('./index.html', (err, htmlContent) => {
        if (err) throw err;

        res.setHeader("content-type", "text/html");
        res.write(htmlContent);
        res.end();
    });
});

server.listen(3000);

function onError(err) {
    console.log(err);
}

function onListening(err) {
    var address = server.address();
    console.log("Server started on port: ", address.port);
}

server.on('error', onError);
server.on('listening', onListening);

// ------------------------------------- WebSocket Code
const WebSocketSerer = require('websocket').server;
const sEmitter = require('./string-emitter');

const wsServer = new WebSocketSerer({
    httpServer: server
});

let clients = [];
let count = 1;

sEmitter.on('data', (s) => {
    if(clients.length>0) {
        for(const client of clients) {
            if(client) {
                client.sendUTF(s);
            }
        }
    }
});

wsServer.on('request', (req) => {
    var connection = req.accept('echo-protocol');

    var id = count++;
    clients[id] = connection;
    console.log(`Connection Accepted: [${id}]`);

    connection.on('message', (msg) => {
        console.log(`Client said: [${msg.utf8Data}]`);
        connection.sendUTF('Data from Server...');
    });

    connection.on('close', () => {
        delete clients[id];
        console.log(`Connection Closed: [${id}]`);
    });
});