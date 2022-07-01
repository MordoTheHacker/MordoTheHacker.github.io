const mcontainer= document.querySelector('.mcontainer')
var audio;
var ss1=0;

function playSong() {
    mcontainer.classList.add('play');
    let image=document.getElementById(`button${ss1}`);
    image.src='pause.png'
    audio.play();
}  

// Pause song
function pauseSong() {
    if(ss1==0){
        return;
    }
    mcontainer.classList.remove('play');
    let image=document.getElementById(`button${ss1}`);
    image.src='play.png'
  
    audio.pause();
}

playBtn1.addEventListener('click', ()=>{

    if(ss1!=1){
        pauseSong()
        audio=document.querySelector('#song1')
        ss1=1;
    }
    const isPlaying = mcontainer.classList.contains('play')
    if(isPlaying){
        pauseSong()
    } else{
        playSong()
    }
})

playBtn2.addEventListener('click', ()=>{

    if(ss1!=2){
        pauseSong()
        audio=document.querySelector('#song2')
        ss1=2;
    }
    const isPlaying = mcontainer.classList.contains('play')
    if(isPlaying){
        pauseSong()
    } else{
        playSong()
    }
})

playBtn3.addEventListener('click', ()=>{

    if(ss1!=3){
        pauseSong()
        audio=document.querySelector('#song3')
        ss1=3;
    }
    const isPlaying = mcontainer.classList.contains('play')
    if(isPlaying){
        pauseSong()
    } else{
        playSong()
    }
})

playBtn4.addEventListener('click', ()=>{

    if(ss1!=4){
        pauseSong()
        audio=document.querySelector('#song4')
        ss1=4;
    }
    const isPlaying = mcontainer.classList.contains('play')
    if(isPlaying){
        pauseSong()
    } else{
        playSong()
    }
})

playBtn5.addEventListener('click', ()=>{

    if(ss1!=5){
        pauseSong()
        audio=document.querySelector('#song5')
        ss1=5;
    }
    const isPlaying = mcontainer.classList.contains('play')
    if(isPlaying){
        pauseSong()
    } else{
        playSong()
    }
})

playBtn6.addEventListener('click', ()=>{

    if(ss1!=6){
        pauseSong()
        audio=document.querySelector('#song6')
        ss1=6;
    }
    const isPlaying = mcontainer.classList.contains('play')
    if(isPlaying){
        pauseSong()
    } else{
        playSong()
    }
})

function end(){
    let image=document.getElementById(`button${ss1}`);
    image.src='play.png'
}
audio.addEventListener('ended', end);