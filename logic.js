document.querySelector('#startgm').addEventListener('click',function(){
let timer = 60;
let randhit = 0;
let score  = 0;
const audioArray = ["music.mp3", "chili.mp3", "lkc.mp3", "bst.mp3", 'wb.mp3', "challo.mp3", "3RD.mp3", "bande.mp3", "music.mp3", "chili.mp3", "lkc.mp3", "bst.mp3", 'wb.mp3', "challo.mp3","3RD.mp3", "bande.mp3"];
alert('If You Get RCB Anthem You Are Very Lucky');
function playRandomAudio() {
  const audioIndex = Math.floor(Math.random() * audioArray.length);
  const audio = new Audio(audioArray[audioIndex]);
  audio.play();
}

function bubble(){let culla=``;
for (var i=1;i<=189;i++){
    culla += `<div class='bubble'>${Math.floor(Math.random()*10)}</div>`;
}

let niche = document.querySelector('#dnbd');

niche.innerHTML = culla;
}

function  timerrun() {timeout = setInterval(function(){
    if (timer>0){
        timer--;
        document.querySelector('#timer').textContent = timer;
        }else{
            clearInterval(timeout);
            document.querySelector('#dnbd').innerHTML = `<h1>Game Over</h1>`;
    }},1000)
}

function hitno(){
    randhit  = Math.floor(Math.random()*10);
    document.querySelector('#hitbox').textContent = randhit;    
}

function scrdip(){
    score += 1;
    document.querySelector('#score').textContent = score;
}
playRandomAudio();
bubble();
timerrun();
hitno();

document.querySelector('#dnbd').addEventListener("click",function(dets){
    //console.log(Number(dets.target.textContent));
    console.log(randhit);
    if (randhit===Number(dets.target.textContent)){
        scrdip();
        hitno();
        bubble();
        timerrun();
    }
});



document.querySelector('#btn').addEventListener('click',function(){
    location.reload();
});});