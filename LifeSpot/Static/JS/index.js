// Глобальная переменная для хранения сессии
let session = new Map();

// Функция для проверки возраста
function checkAge() {
    const age = prompt("Пожалуйста, введите ваш возраст");
    session.set("age", age);

    if (age >= 18) {
        alert("Приветствуем на LifeSpot!");
    } else {
        alert("Наши трансляции не предназначены для лиц моложе 18 лет. Вы будете перенаправлены.");
        window.location.href = "http://www.google.com";
    }
}

// Функция для сохранения данных в сессию
function handleSession() {
    session.set("userAgent", window.navigator.userAgent);
    session.set("startDate", new Date().toLocaleString());
}

// Функция для логирования сессии
const sessionLog = function () {
    session.forEach((value, key) => {
        console.log(`${key}: ${value}`);
    });
};

// Функция фильтрации контента
function filterContent() {
    const inputText = document.querySelector('input[type="text"]').value.toLowerCase();
    const elements = document.getElementsByClassName('video-container');

    for (let i = 0; i < elements.length; i++) {
        const videoText = elements[i].querySelector(".video-title").innerText.toLowerCase();

        if (!videoText.includes(inputText)) {
            elements[i].style.display = 'none';
        } else {
            elements[i].style.display = 'inline-block';
        }
    }
}

// Выполняем логику после загрузки DOM
document.addEventListener('DOMContentLoaded', () => {
    // Выполняем проверку возраста
    

    // Сохраняем данные сессии
    handleSession();

    // Логируем сессию
    sessionLog();

    // Добавляем обработчик события для фильтрации
    document.querySelector('input[type="text"]').addEventListener('input', filterContent);
});
checkAge();
setTimeout(() =>
    alert("Нравится LifeSpot? " + '\n' +  "Подпишитесь на наш Instagram @lifespot999!" ),
10000);
