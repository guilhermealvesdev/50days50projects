const btns = document.querySelectorAll(".btn");
const path = "./sounds/"

let audioFile = new Audio();

btns.forEach((item) => {
    item.addEventListener('click', (e) => {
        audioFile.pause();
        audioFile.currentTime = 0;
        const audio = item.dataset.audio;
        audioFile = new Audio(`${path}${audio}.mp3`);
        audioFile.play();
    })
});