// FETCH DO JSON
import initfetchProf from "/profissionais.js"

initfetchProf()
// VIDEO

var video = document.getElementById("videoInst")

if (video.play() !== undefined) {
    video.play().then(_ => {
        // Autoplay started!
    }).catch(error => {
        // Try muted autoplay
        video.muted = true
        video.play().then(_ => {
            // Muted autoplay started. Show unmute button
        }).catch(error => {
        })
    });
}

video.addEventListener('click',function(){
    if(video.paused){
        video.play();
    }else{
        video.pause();
    }
}, false);



