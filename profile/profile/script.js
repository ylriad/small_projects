const mainTitle= document.getElementById('mainTitle');
let changeNameBtn = document.getElementById('changeNameBtn');
let increaseAgeBtn = document.getElementById('increaseAgeBtn');
let changePhotoBtn = document.getElementById('changePhotoBtn');
let changeStyleBtn = document.getElementById('changeStyleBtn');
let resetProfileBtn = document.getElementById('resetProfileBtn');
let showInputBtn = document.getElementById('showInputBtn');
let inputField = document.getElementById('inputField');
const outputText = document.getElementById('outputText');
let userName = document.getElementById('userName');
let userAge = document.getElementById('userAge');
let avatar = document.getElementById('avatar');
let clicksCount = 0;


function changeName() {
    let newName = prompt("Введите новое имя:", userName.innerText);
    if (newName=== "") {
        alert("Введите новое имя!");
    } else {
        userName.innerText = newName;
        alert("Привет, " + newName + "!");
    }
}

function increaseAge() {
    clicksCount++;
    console.log("Сколько раз нажималась кнопка увеличения возраста? Ответ : " + clicksCount);
    let newAge = parseInt(userAge.innerText) + 1;
        userAge.innerHTML = newAge;
        if (newAge >= 120) {
            alert("Вы ввели максимальное значение!");
            increaseAgeBtn.disabled = true; 
            return;        
        }
}

function changePhoto() {
    if (avatar.src.includes("avatar1.png")) {
        avatar.setAttribute("src", "avatar2.png");
    } else {
        avatar.setAttribute("src", "avatar1.png");
    }
}

function changeStyle() {
    const colors = ["red", "orange", "yellow", "green", "blue", "purple"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    mainTitle.style.color = randomColor;   
    mainTitle.style.fontSize = "30px";
    mainTitle.style.fontFamily = "Times New Roman";
}

function showInputField() {
    if (inputField.innertText === "") {
        alert("Введите текст!");
        return;
    } else {
        outputText.innerText = inputField.value;
    }
}

function resetProfile() {
    userName.innerText = "Гость";
    userAge.innerText = "0";
    avatar.setAttribute("src", "avatar1.png");
    mainTitle.style.color = "#d63384";
    mainTitle.style.fontSize = "36px";
    mainTitle.style.fontFamily = "'Comic Sans MS', cursive, sans-serif";
    document.body.style.background = "linear-gradient(-45deg, #ffd1dc, #ffe4ec, #f9c5d1, #ffe6f0)";
    document.body.style.backgroundAttachment = "fixed";
    document.body.style.backgroundSize = "cover";
    outputText.innerText = "";
    inputField.value = "";
}

changeNameBtn.addEventListener('click', changeName);
increaseAgeBtn.addEventListener('click', increaseAge);
changePhotoBtn.addEventListener('click', changePhoto);
changeStyleBtn.addEventListener('click', changeStyle);
resetProfileBtn.addEventListener('click', resetProfile);
showInputBtn.addEventListener('click', showInputField);