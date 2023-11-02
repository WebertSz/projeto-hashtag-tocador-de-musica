const songName = document.getElementById("song-name");
const bandName = document.getElementById("band-name");
const song = document.getElementById("audio");
const cover = document.getElementById("cover");
const play = document.getElementById("play");
const next = document.getElementById("next");
const previous = document.getElementById("previous");

const oPassageiro = {
    songName : "O Passageiro",
    artist : "Capital Inicial",
    fileSong : "O Passageiro",
    fileImg : "Capa de disco Capital Inicial Acústico MTV"
};

const oMundo = {
    songName : "O Mundo",
    artist : "Capital Inicial",
    fileSong : "O Mundo",
    fileImg : "Capa de disco Capital Inicial Acústico MTV"
};

const todasAsNoites = {
    songName : "Todas as Noites",
    artist : "Capital Inicial",
    fileSong : "Todas as Noites",
    fileImg : "Capa de disco Capital Inicial Acústico MTV"
};

let isPlaying = false;
const capitalInicialAcusticoMTV = [oPassageiro, oMundo, todasAsNoites];
let index = 0;

function playSong(){
    play.querySelector(".bi").classList.remove("bi-play-circle-fill");
    play.querySelector(".bi").classList.add("bi-pause-circle-fill");
    song.play();
    isPlaying = true;
}

function pauseSong(){
    play.querySelector(".bi").classList.remove("bi-pause-circle-fill");
    play.querySelector(".bi").classList.add("bi-play-circle-fill");
    song.pause();
    isPlaying = false;
}

function playPauseDecider(){
    if(isPlaying === true){
        pauseSong();
    }
    else{
        playSong();
    }
}

function initializeSong(){
    cover.src = `img/${capitalInicialAcusticoMTV[index].fileImg}.jpg`;
    song.src = `songs/${capitalInicialAcusticoMTV[index].fileSong}.mp3`;
    songName.innerText = capitalInicialAcusticoMTV[index].songName;
    bandName.innerText = capitalInicialAcusticoMTV[index].artist;
}

function previousSong(){
    if(index === 0){
        index = capitalInicialAcusticoMTV.length - 1;
    }
    else{
        index -= 1;
    }
    initializeSong();
    playSong();
}

function nextSong(){
    if(index === capitalInicialAcusticoMTV.length -1){
        index = 0;
    }
    else{
        index += 1;
    }
    initializeSong();
    playSong();
}

initializeSong();

play.addEventListener("click", playPauseDecider);
previous.addEventListener("click", previousSong);
next.addEventListener("click", nextSong);