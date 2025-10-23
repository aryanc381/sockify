import WebSocket, { WebSocketServer } from "ws";

const ws = new WebSocketServer({ port: 8080 });

interface Users {
    name?: string
    socket: WebSocket;
}

let clients: Users[] = [];

ws.on('connection', (socket) => {
    
    socket.send('User connected.');
    clients.push({ socket });
    // console.log(socket);

    socket.on('message', (message) => {
        clients.forEach((client) => {
            if(client.socket !== socket && client.socket.readyState === WebSocket.OPEN) {
                client.socket.send(message.toString());
            }
        });
    });

    socket.on('close', () => {
        console.log('User disconnected.');
    });
});



