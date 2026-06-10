// Функция для подсчёта фотографий
function countPhotos() {
    let photos = document.querySelectorAll('.photo');
    let counter = document.getElementById('image-counter');
    if (counter) {
        counter.textContent = photos.length;
    }
}

// Функция для работы с лайками
function setupLikes() {
    let likeButtons = document.querySelectorAll('.like-btn');
    let totalLikesElement = document.getElementById('total-likes');
    let totalLikes = 0;

    likeButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            let likesSpan = this.querySelector('.likes');
            let currentLikes = parseInt(likesSpan.textContent);

            if (this.classList.contains('liked')) {
                currentLikes--;
                totalLikes--;
                this.classList.remove('liked');
            } else {
                currentLikes++;
                totalLikes++;
                this.classList.add('liked');
            }

            likesSpan.textContent = currentLikes;
            totalLikesElement.textContent = totalLikes;
        });
    });
}

// Запуск функций при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    countPhotos();
    setupLikes();
    console.log('Галерея загружена!');
});