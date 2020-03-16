const socket = io('http://localhost:3000');
const msgForm = document.querySelector('#send-container');
const inputMsg = document.querySelector('#msg-input');
const msgContainer = document.querySelector('#msg-container');

const userName = prompt('What is your name?');
appendMsg(`You connected.`);
socket.emit('new-user', userName);


socket.on('user-connected', user => {
    appendMsg(`${user} connected.`);
})


socket.on('user-disconnected', user => {
    appendMsg(`${user} disconnected.`);
})

socket.on('chat-msg', data => {
    appendMsg(`${data.name}: ${data.message}`);
})

msgForm.addEventListener('submit', e => {
    e.preventDefault();
    const msg = inputMsg.value;
    socket.emit('send-msg', msg);
    appendMsg(`You: ${inputMsg.value}`);
    inputMsg.value = '';

})


function appendMsg(msg) {
    const msgElement = document.createElement('div');
    msgElement.innerText = msg;
    msgContainer.append(msgElement);

}
