const waitingBox = document.querySelector('.waiting');
const keyBoxInfo = document.querySelector('.keycode-info')

const eKey = document.querySelector('.e-key');
const ekeyCode = document.querySelector('.e-keycode');
const eCode = document.querySelector('.e-code');

window.addEventListener('keyup', (e) => {
    waitingBox.classList.add("d-none");
    keyBoxInfo.classList.remove("d-none");

    eKey.textContent = e.key;
    ekeyCode.textContent = e.keyCode;
    eCode.textContent = e.code;
})