document.addEventListener('DOMContentLoaded', () => {
    // Получаем все кнопки с классом .toggle-details
    const buttons = document.querySelectorAll('.toggle-details');

    // Перебираем каждую кнопку и добавляем обработчик события 'click'
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            // Находим следующий элемент-брат (sibling) с классом .details-content
            const details = button.nextElementSibling;
            
            // Если блок скрыт, показываем его
            if (details.style.display === 'none') {
                details.style.display = 'block';
                button.textContent = 'Скрыть';
            } else {
                // Иначе - скрываем
                details.style.display = 'none';
                button.textContent = 'Подробнее';
            }
        });
    });
});
