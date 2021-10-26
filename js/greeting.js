const greeting = document.querySelector('.greeting');
const nameGreeting = document.querySelector('.name');

let user = {name:''};

// возвращающую время суток (morning, day, evening, night)
//  в зависимости от текущего времени в часах
function getTimeOfDay() {
  const date = new Date();
  const hours = date.getHours(); 
  let result;
  let numberSwitch = hours / 6 + 0.01;

  if(numberSwitch < 1)
  {
    result = 'night';
    return result;
  }else if(numberSwitch < 2)
  {
    result = 'morning';
    return result;
  }else if(numberSwitch < 3)
  {
    result = 'afternoon';
    return result;
  }else
  {
    result = 'evening';
    return result;
  }
}

// Записываем имя в локальное хранилище из user.name
function setLocalStorage() {
  localStorage.setItem('name', user.name);
}

// Получаем имя из локального хранилища в user.name
function getLocalStorage() {
  if(localStorage.getItem('name')) {
    user.name = localStorage.getItem('name');
  }
}

function inputName() {
  user.name = nameGreeting.value;
  setLocalStorage();
}

// Получаем имя из хранилища, отслеживаем поле input и заноим
// имя в поле input
function showGreeting() {
  getLocalStorage();
  nameGreeting.value = user.name;

  const timeOfDay = getTimeOfDay();
  const greetingText = `Good ${timeOfDay}`;
  greeting.textContent = greetingText;
  setTimeout(showGreeting, 60000);
}

// Вызываем обработчик события перед и после перезагрузки страницы
window.addEventListener('load', getLocalStorage);
window.addEventListener('beforeunload', setLocalStorage);
nameGreeting.addEventListener('input', inputName);

showGreeting();


