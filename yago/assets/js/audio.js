const audioIcon = document.getElementById("audio-icon");
audioIcon.classList.add("fa-volume-mute");
let audio = document.querySelector("#theme_audio");
let isMuted = true;
audio.loop = true;

function toggleAudio() {
    if (isMuted) {
        audioIcon.classList.remove("fa-volume-mute");
        audioIcon.classList.add("fa-volume-up");
        audio.muted = false;
        audio.play();
    } else {
        audioIcon.classList.remove("fa-volume-up");
        audioIcon.classList.add("fa-volume-mute");
        audio.muted = true;
        audio.pause();
    }

    isMuted = !isMuted;
}
