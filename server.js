const io = require("socket.io")(3000);

const users = {};

io.on('connection', socket => {
    socket.on('new-user', userName => {
        users[socket.id] = userName;
        socket.broadcast.emit('user-connected', userName);
    })


    socket.on('send-msg', message => {
        socket.broadcast.emit('chat-msg', { message: message, name: users[socket.id] });              
    })

    socket.on('disconnect', () => {
        socket.broadcast.emit('user-disconnected', users[socket.io]); 
        delete users[socket.id];
    })
})



