const chatService = "wss://echo-ws-service.herokuapp.com";
const chatDiv = document.querySelector(".chat__message");
const chatBtn = document.querySelector(".chat__btn");
const geoBtn = document.querySelector(".geo");
const chatMessage = document.querySelector(".chat__input");
const mapLink = document.querySelector(".chat__link");

let websocket = new WebSocket(chatService);

function writeMessage(message) {
    let msg = document.createElement("p");
    msg.classList.add("message");
    msg.innerHTML = message;
    chatDiv.appendChild(msg);
}

chatBtn.addEventListener('click', () => {
    const message = chatMessage.value;
    writeMessage(message);
    websocket.send(message);
    chatMessage.value = '';
})

websocket.onmessage = function(evt) {
    writeMessage(
        `<p class="messageService">` + evt.data +`</p>`
    );
};

const error = () => {
    writeMessage("Ошибка поиска гео-локации");
}

const success = (position) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    chatDiv.innerHTML += `<a class="link" href="https://www.openstreetmap.org/#map=18/${latitude}/${longitude}">Гео-локация</a>`
}

geoBtn.addEventListener('click', () => {
    mapLink.href = '';
    mapLink.textContent = '';
    navigator.geolocation.getCurrentPosition(success, error);
})

function getLink(name) {
    mapLink.classList.add("link");
    mapLink.innerHTML = name;
    chatDiv.appendChild(mapLink);
}
