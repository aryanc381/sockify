import { WebSocketServer } from "ws";

const ws = new WebSocketServer({ port: 8080 });

let clients = [];

ws.on('connection', (socket) => {
    
    socket.send('User connected.');
    clients.push(socket);

    socket.on('message', (message) => {
        clients.forEach((client) => {
            if(client !== socket && client.readyState === 1) {
                client.send(message.toString());
            }
        });
    });

    socket.on('close', () => {
        console.log('User disconnected.');
    });
});



