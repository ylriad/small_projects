// Это 11 практическая работа

/* Задание:
1.	Используйте getElementById() для обращения ко всем элементам.
2.	Для изменения текста используйте innerHTML и innerText.
3.	Для изменения стиля используйте element.style.
4.	Используйте setAttribute() для изменения src изображения.
5.	Скрывайте/показывайте элемент с style.display = "none" и "block".
6.	Используйте console.log() и window.alert() в соответствующих функциях.
7.	Используйте переменные и арифметические операции (+, -, *, /, %).
8.	В начале скрипта напишите однострочный и многострочный комментарий.
9.	Используйте ключевые слова let, const, var.
*/

let changeTextBtn = document.getElementById('changeTextBtn');
let toggleImageBtn = document.getElementById('toggleImageBtn');
let image = document.getElementById('myImage');
let text = document.getElementById('infoText');
let changeImageBtn = document.getElementById('changeImageBtn');
let mathBtn = document.getElementById('mathBtn');
let styleBtn = document.getElementById('styleBtn');
const title = document.getElementById('mainTitle');
var num1 = document.getElementById('num1');
var num2 = document.getElementById('num2');
var num3 = document.getElementById('num3');
let res = document.getElementById('result');
let alertBtn = document.getElementById('alertBtn');
let link;

function changeText() {
  if (text.innerHTML === "Грустный котик") {
    text.innerHTML = "Счастливый котик";
  } else {
    text.innerHTML = "Грустный котик";
  }
}

function hideshowImage() {
  let currentDisplay = window.getComputedStyle(image).display;

  if (currentDisplay === "none") {
    image.style.display = "block";
    toggleImageBtn.innerHTML = "Спрячь котика!";
  } else {
    image.style.display = "none";
    toggleImageBtn.innerHTML = "Хочу видеть котика!";
  }
}

function changeImage() {
  link = prompt("Введите ссылку на изображение: ");
  if (link) {
    image.setAttribute("src", link);
  } else {
    alert("Вы не ввели ссылку!");
  }
}

function style(){
  title.style.color="red";
}

function math() {
  let val1 = parseFloat(num1.value);
  let val2 = parseFloat(num2.value);
  let val3 = parseFloat(num3.value);

  if (isNaN(val1) || isNaN(val2) || isNaN(val3)) {
    alert("Ввкдите корректные значения!");
    return;
  }

  if (val1 <= val2 || val1 < 0 || val2 < 0 || val3 < 0) {
    alert("Введите корректные значения!");
    return;
  }

  let result = (val1 - val2) * val3;
  res.innerText = "Результат: " + result;
  console.log(result);
}

changeTextBtn.addEventListener('click', changeText);
toggleImageBtn.addEventListener('click', hideshowImage);
changeImageBtn.addEventListener('click', changeImage);
styleBtn.addEventListener('click', style);
mathBtn.addEventListener('click', math);
alertBtn.addEventListener('click', function() {
  alert("Привет, мяу!");
});
