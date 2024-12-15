// Первая функция: запрос имени и текста комментария
function leaveComment() {
    // Запрашиваем имя пользователя
    const userName = prompt("Введите ваше имя:");

    // Если пользователь отменил ввод, прекращаем выполнение
    if (!userName) {
        alert("Имя обязательно для оставления комментария!");
        return;
    }

    // Запрашиваем текст комментария
    const commentText = prompt("Введите текст комментария:");

    // Проверяем, что комментарий не пустой
    if (!commentText) {
        alert("Комментарий не может быть пустым!");
        return;
    }

    // Получаем текущую дату и время
    const commentDate = new Date().toLocaleString();

    // Вызываем функцию для отображения комментария
    addComment(userName, commentText, commentDate);
}

// Вторая функция (стрелочная): добавление комментария на страницу
const addComment = (userName, commentText, commentDate) => {
    // Находим контейнер для комментариев
    const commentsContainer = document.getElementById("commentsContainer");

    // Создаем новый элемент для комментария
    const commentElement = document.createElement("div");
    commentElement.className = "comment";

    // Заполняем содержимое комментария
    commentElement.innerHTML = `
        <p><strong>${userName}</strong> <span style="font-size: 0.9em; color: gray;">(${commentDate})</span></p>
        <p>${commentText}</p>
        <hr>
    `;

    // Добавляем комментарий в контейнер
    commentsContainer.appendChild(commentElement);
};

// Вешаем обработчик на кнопку
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById("leaveCommentButton").addEventListener("click", leaveComment);
});
