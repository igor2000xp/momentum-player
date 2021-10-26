const slideNext = document.querySelector(".slide-next");
const slidePrev = document.querySelector('.slide-prev');
let randomNum;

function getRandomNum() {
  return Math.floor((Math.random() * 19) + 1);
}

function setBg() {
  let timeOfDay = getTimeOfDay();
  randomNum = getRandomNum();
  randomNum = addRandomNum();
}

function addRandomNum() {
  let bgStr;
  if(randomNum < 10) {
    bgStr = randomNum + '';
    bgStr = bgStr.padStart(2,'0');
  }else {
    bgStr = randomNum + '';
  }
  return bgStr;
}

function getSlideNext() {
  randomNum++;
  if(randomNum > 20) {
    randomNum = 1;
  }
  randomNum = addRandomNum();
  changeSlider();
}

function getSlidePrev() {
  randomNum--;
  if(randomNum < 1) {
    randomNum = 20;
  }
    randomNum = addRandomNum();
    changeSlider();
}

function changeSlider() {
  
  const img = new Image();
  img.src = `https://raw.githubusercontent.com/igor2000xp/stage1-tasks/assets/images/${getTimeOfDay()}/${randomNum}.jpg`
  img.onload = () => {
    document.body.style.backgroundImage = `url('${img.src}')`;
  }; 
}



slideNext.addEventListener('click', getSlideNext);
slidePrev.addEventListener('click', getSlidePrev);

setBg();
changeSlider();
// console.log(getTimeOfDay() + '  ' + randomNum);

// document.body.style.backgroundImage = `url('https://raw.githubusercontent.com/igor2000xp/stage1-tasks/assets/images/day/${randomNum}.jpg')`;