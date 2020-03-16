const socket = io('http://localhost:3000');
const msgForm = document.querySelector('#send-container');
const inputMsg = document.querySelector('#msg-input');
const msgContainer = document.querySelector('#msg-container');

const userName = alert('What is your name?');
appendMsg(`${userName} connected`);

socket.on('chat-msg', data => {
    appendMsg(data)
})

msgForm.addEventListener('submit', e => {
    e.preventDefault();
    const msg = inputMsg.value;
    socket.emit('send-msg', msg);
    inputMsg.value = '';

})


function appendMsg(msg) {
    const msgElement = document.createElement('div');
    msgElement.innerText = msg;
    msgContainer.append(msgElement);

}
