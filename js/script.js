// Получаем все элементы вкладок и контента
const tabs = document.querySelectorAll('.tab');
const tabContents = document.querySelectorAll('.tab-content');

// Добавляем обработчик событий на каждую вкладку
tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const targetTab = tab.dataset.tab;

        // Удаляем активный класс со всех вкладок и контента
        tabs.forEach(t => t.classList.remove('active'));
        tabContents.forEach(content => {
            content.classList.remove('active');
            content.style.display = 'none'; // Скрываем контент
        });

        // Добавляем активный класс выбранной вкладке
        tab.classList.add('active');

        // Находим контент, связанный с выбранной вкладкой, и показываем его
        const activeContent = document.getElementById(targetTab);
        activeContent.style.display = 'block'; // Показываем контент
        setTimeout(() => {
            activeContent.classList.add('active'); // Добавляем анимацию после показа
        }, 50);
    });
});
