const audioGames = document.querySelector("#audio");
const btnPleyAudio = document.getElementById("start-audio");

let isPley = false;

const PleyAudio = (stat) => {
    if (stat) {
        audioGames.play();
        isPley = true;
    }else {
        audioGames.pause();
         isPley = false;
    }
    
}  

btnPleyAudio.onclick = () => {
    PleyAudio(!isPley);
} 

