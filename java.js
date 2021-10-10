let cancion = document.getElementById("cancion");
let play_btn = document.getElementById("play-btn");
let pause_btn = document.getElementById("pause-btn");
let cover = document.getElementById("cover");

play_btn.addEventListener("click", () => {
    cancion.play();
    cover.style.animationPlayState = "running";
});

pause_btn.addEventListener("click", () => {
    cancion.pause();
    cover.style.animationPlayState = "paused";
});





