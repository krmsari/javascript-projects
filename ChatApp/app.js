const sendButton = document.getElementById('send');
const messageInput = document.getElementById('input');


messageInput.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        console.log("girdi")
        send();
    }

});

function send() {
    const messageList = document.getElementById('messages');
    const now = new Date();
    const hours = now.getHours() < 10 ? '0' + now.getHours() : now.getHours();
    const minutes = now.getMinutes() < 10 ? '0' + now.getMinutes() : now.getMinutes();

    const messages = {
        text: messageInput.value,
        sender: "Kerem Sari",
        image: "img/profile.png",
        time: hours + ':' + minutes,
    };
    const messageItem = document.createElement('div');
    const avatar = document.createElement('div');
    const text = document.createElement('div');
    const name = document.createElement('div');
    const displayText = document.createElement('span');
    const profile = document.createElement('img');
    const time = document.createElement('span');

    messageItem.classList.add('message');
    messageItem.classList.add('right');
    text.classList.add('text');
    avatar.classList.add('avatar');
    profile.classList.add('profile');
    time.classList.add('time')
    name.classList.add('name')

    profile.src = messages.image;
    time.innerHTML = messages.time;
    displayText.innerText = messages.text;
    name.innerText = messages.sender;

    text.appendChild(name)
    text.appendChild(displayText)
    text.appendChild(time)
    avatar.appendChild(profile)

    messageItem.appendChild(avatar)
    messageItem.appendChild(text)

    messageList.appendChild(messageItem);

    outComing();
    messageInput.value = '';
};

function outComing() {
    const messageList = document.getElementById('messages');
    const now = new Date();
    const hours = now.getHours() < 10 ? '0' + now.getHours() : now.getHours();
    const minutes = now.getMinutes() < 10 ? '0' + now.getMinutes() : now.getMinutes();
    const messages = {
        text: makeid(10).toString(),
        sender: "Random",
        image: "img/sender.png",
        time: hours + ':' + minutes,
    };


    const messageItem = document.createElement('div');
    const avatar = document.createElement('div');
    const text = document.createElement('div');
    const name = document.createElement('div');
    const displayText = document.createElement('span');
    const profile = document.createElement('img');
    const time = document.createElement('span');

    messageItem.classList.add('message');
    text.classList.add('text');
    avatar.classList.add('avatar');
    profile.classList.add('profile');
    time.classList.add('time')
    name.classList.add('name')

    profile.src = messages.image;
    time.innerHTML = messages.time;
    displayText.innerText = messages.text;
    name.innerText = messages.sender;

    text.appendChild(name)
    text.appendChild(displayText)
    text.appendChild(time)
    avatar.appendChild(profile)

    messageItem.appendChild(avatar)
    messageItem.appendChild(text)

    messageList.appendChild(messageItem);

    messageInput.value = '';
};

function makeid(length) {
    let result = '';
    const characters = 'abcdefghijklmnopqrstuvyz';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < Math.random() * 1000) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
        counter += 1;
    }
    return result;
}

function previewImage() {
    const messageList = document.getElementById('messages');
    const now = new Date();
    const hours = now.getHours() < 10 ? '0' + now.getHours() : now.getHours();
    const minutes = now.getMinutes() < 10 ? '0' + now.getMinutes() : now.getMinutes();

    const messages = {
        text: messageInput.value,
        sender: "Kerem Sari",
        image: "img/profile.png",
        time: hours + ':' + minutes,
    };
    const messageItem = document.createElement('div');
    const avatar = document.createElement('div');
    const text = document.createElement('div');
    const name = document.createElement('div');
    const displayText = document.createElement('span');
    const profile = document.createElement('img');
    const time = document.createElement('span');

    displayText.setAttribute("id", "imagePreview")
    displayText.classList.add('img')
    messageItem.classList.add('message');
    messageItem.classList.add('right');
    text.classList.add('text');
    avatar.classList.add('avatar');
    profile.classList.add('profile');
    time.classList.add('time')
    name.classList.add('name')

    profile.src = messages.image;
    time.innerHTML = messages.time;
    name.innerText = messages.sender;

    text.appendChild(name)
    text.appendChild(displayText)
    text.appendChild(time)
    avatar.appendChild(profile)

    messageItem.appendChild(avatar)
    messageItem.appendChild(text)


    messageList.appendChild(messageItem)

    var preview = document.querySelector('#imagePreview');
    var select = document.querySelector('#imageInput')
    file = select.files[0];
    var reader = new FileReader();

    reader.addEventListener('load', function () {
        preview.innerHTML = '<img src="' + reader.result + '"/>';
    }, false);

    if (file) {
        reader.readAsDataURL(file);
    }

    select.value = "";


}

function uploadImage() {
    var file = document.querySelector('#imageInput').files[0];
    // Do your image uploading code here
}
