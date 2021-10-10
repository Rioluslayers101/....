let cancion = document.getElementById("cancion");
let play_pause_btn = document.getElementById("play-pause-btn");
let stop_btn = document.getElementById("pause-btn");
let cover = document.getElementById("cover");

let is_playing = false;

play_pause_btn.addEventListener("click" , () =>{
    if(is_playing){
        cancion.pause();
        cover.style.animationPlayState = "paused";
        controls.style.animationPlayState = "paused";
        play_pause_btn.innerHTML = "Play";
        is_playing = false;
    } else {
        cancion.play();
        cover.girar.animationPlayState = "running";
        controls.style.animationPlayState = "running";
        play_pause_btn.innerHTML = "Pausa"
        is_playing = true;
    }
});






