 // Подставьте URL изображений, которые должны меняться при наведении мышью.
 const hoverImages = ["https://cdn.iportal.ru/preview/news/articles/7e9b7e714beab4de010170c6e8d1b178000320ec_1920_1080_c.jpg", "https://storage.myseldon.com/news-pict-29/29B71E9FC46AE5759EF76509A4EEF322"];
 const newsImages = document.querySelectorAll('.news-image');

 newsImages.forEach((el, index) => {
   el.addEventListener('mouseover', () => {
     el.style.backgroundImage = `url('${hoverImages[index + 1]}')`;
   });
   el.addEventListener('mouseout', () => {
     el.style.backgroundImage = `url('${hoverImages[index]}')`;
   });
 });

 document.getElementById('newsForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Предотвращаем стандартную отправку формы

    let isValid = true;
    let alertMessage = 'Пожалуйста, заполните следующие поля:\n';

    // Проверяем каждое поле на заполненность
    this.querySelectorAll('input[type=text], input[type=email], textarea').forEach(function(field) {
        if (!field.value) {
            isValid = false;
            alertMessage += '- ' + field.previousElementSibling.innerText + '\n';
        }
    });

    if (!isValid) {
        alert(alertMessage); // Показываем сообщение с незаполненными полями
    } else {
        let submissionDetails = `Имя: ${this.name.value}\n` +
                                `Email: ${this.email.value}\n` +
                                `Заголовок новости: ${this.title.value}\n` +
                                `Описание новости: ${this.description.value}`;

        alert('Спасибо за вашу новость!\nВаши детали:\n' + submissionDetails);
    }
});

function calculate(operation) {
    const number1 = parseFloat(document.getElementById('number1').value);
    const number2 = parseFloat(document.getElementById('number2').value);
    let result;
  
    switch (operation) {
      case 'add':
        result = number1 + number2;
        break;
      case 'subtract':
        result = number1 - number2;
        break;
      case 'multiply':
        result = number1 * number2;
        break;
      case 'divide':
        if (number2 === 0) {
          alert('Деление на 0 невозможно');
          return;
        }
        result = number1 / number2;
        break;
      case 'power':
        result = Math.pow(number1, number2);
        break;
      case 'sqrt':
        if (number1 < 0) {
          alert('Квадратный корень из отрицательного числа невозможен');
          return;
        }
        result = Math.sqrt(number1);
        break;
      case 'cosh':
        result = Math.cosh(number1);
        break;
      default:
        alert('Неизвестная операция');
        return;
    }
  
    document.getElementById('result').textContent = `Результат: ${result}`;
  }

  let pageTimer;
  let countdownTimer;
  
  window.onload = function() {
    pageTimer = startPageTimer();
  };
  
  function startPageTimer() {
    let seconds = 0;
    return setInterval(() => {
      seconds++;
      document.getElementById('timerOutput').textContent = `Вы на странице: ${seconds} секунд`;
      setBackground();
    }, 1000);
  }
  
  function setBackground() {
    const date = new Date();
    const seconds = date.getSeconds();
    const hue = (seconds * 6) % 360; // Переводим секунды в диапазон оттенков
    document.body.style.backgroundColor = `hsl(${hue}, 100%, 50%)`;
  }
  
  
  function startCountdown() {
    clearInterval(countdownTimer);
    const targetDate = new Date(document.getElementById('targetDate').value);
    countdownTimer = setInterval(() => {
      const now = new Date();
      const difference = targetDate - now;
  
      if (difference <= 0) {
        clearInterval(countdownTimer);
        document.getElementById('countdownOutput').textContent = 'Время вышло!';
        return;
      }
  
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);
  
      document.getElementById('countdownOutput').textContent = `До указанной даты осталось: ${days} дней ${hours} часов ${minutes} минут ${seconds} секунд`;
    }, 1000);
  }
  
  const inputField = document.getElementById('inputField');
const output = document.getElementById('output');
let interval;
let currentIndex = 0;

function startAnimation() {
    if (interval) {
        clearInterval(interval);
        currentIndex = 0;
    }

    interval = setInterval(() => {
        output.innerHTML = convertToHighlightedText(inputField.value, currentIndex);
        currentIndex++;

        if (currentIndex > inputField.value.length) {
            currentIndex = 0;
        }
    }, 100); 
}

function convertToHighlightedText(text, index) {
    let before = text.slice(0, index);
    let highlighted = text.charAt(index).toUpperCase();
    let after = text.slice(index + 1);

    return before + highlighted + after;
}


function toggleSubMenu(id) {
  var subMenu = document.getElementById(id);
  if (subMenu.style.display === "block") {
      subMenu.style.display = "none";
  } else {
      // Свернуть все открытые подменю перед открытием нового
      var openMenus = document.querySelectorAll('.sub-menu');
      for (var i = 0; i < openMenus.length; i++) {
          openMenus[i].style.display = 'none';
      }
      // Открыть выбранное подменю
      subMenu.style.display = "block";
  }
}
