import WebSocket, { WebSocketServer } from "ws";

const ws = new WebSocketServer({ port: 8080 });

interface Users {
    name?: string
    socket: WebSocket;
}

let clients: Users[] = [];
let parsedMessage: any;

ws.on('connection', (socket) => {    
    try {
        socket.send('User connected.');
        clients.push({ socket });
        // console.log(socket);

        socket.on('message', (message) => {
            parsedMessage = JSON.parse(message.toString());

            console.log(parsedMessage.payload.msg);
            clients.forEach((client) => {

                if(client.socket !== socket && client.socket.readyState === WebSocket.OPEN) {
                    client.socket.send(message.toString());
                }
            });
        });

        socket.on('close', () => {
            console.log('User disconnected.');
        });
    } catch(err) {
        console.log('Mai fatgaya!');
    }
    
});



