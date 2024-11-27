
const pauseBtn = document.getElementById("pause-btn");
const playBtn = document.getElementById("play-btn");
const animations = document.querySelectorAll(".animation > div");



function pauseAnimations() {
    animations.forEach(anim => {
        
        anim.style.animationPlayState = "paused";
    });
    pauseBtn.disabled = true; 
    playBtn.disabled = false; 
}


function playAnimations() {
    animations.forEach(anim => {
        
        anim.style.animationPlayState = "running";
    });
    pauseBtn.disabled = false; 
    playBtn.disabled = true; 
}


pauseAnimations(); 


pauseBtn.addEventListener("click", pauseAnimations);
playBtn.addEventListener("click", playAnimations);
