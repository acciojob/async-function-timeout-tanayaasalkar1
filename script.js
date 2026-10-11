
let msg = document.getElementById('text');
let delay = document.getElementById('delay');
let output = document.getElementById('output');
let btn = document.getElementById('btn');

function displayMsg(message, time) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(message);
        }, time);
    });
}

async function display() {
    let message = msg.value;
    let time = Number(delay.value);

    let res = await displayMsg(message, time);

    output.textContent = res;
}

btn.addEventListener('click', display);
