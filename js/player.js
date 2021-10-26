import playList from './playList.js'
const play = document.querySelector('.play');
const playPrev = document.querySelector('.play-prev');
const playNext = document.querySelector('.play-next');
const playListDoc = document.querySelector('.play-list');
const playStop = document.querySelector('.play');


const audio = new Audio();
let isPlay = false;
let playListN = 0;
let li = [];


function playAudio() {
  audio.src = `${playList[playListN].src}`;
  audio.currentTime = 0;

  if(isPlay) {
    isPlay = false;
    audio.pause();
    playStop.classList.remove("pause");
    // console.log("pause");
   }else{
    audio.play();
    playStop.classList.add("pause");
    isPlay = true;
  }
}

function checkItem() {
  for(let i = 0; i < playList.length; i++) {
    li[i].classList.remove("item-active");
  }
  li[playListN].classList.add("item-active");
}

function nextPlay () {
  if(playListN < 3) {
    playListN++;
  }else{
    playListN = 0;
  }
  playAudio();
  checkItem();
}

function prevPlay() {
  if(playListN < 1) {
    playListN = 3;
  }else{
    playListN--;
  }
  playAudio();
  checkItem()
}

function addPlayList() {
  for(let i = 0; i < playList.length; i++){
    li[i] = document.createElement('li');
    if(i == playListN) {
      li[i].classList.add ('play-item', "item-active");
    }else{
      li[i].classList.add ('play-item');
    }
    li[i].textContent = `${playList[i].title}`;
    playListDoc.append(li[i]);
    }
}

function playAfterStop() {
  console.log("stop");
  nextPlay ();
  playAudio();
}


play.addEventListener('click', playAudio);
playNext.addEventListener('click', nextPlay);
playPrev.addEventListener('click', prevPlay);
audio.addEventListener('ended', playAfterStop);

addPlayList();