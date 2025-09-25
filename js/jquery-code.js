$(document).ready(function() {
    // Анимация .fadeIn() для заголовков
    $('h1, h2').hide().fadeIn(2000);

    // Обработка событий .hover() для галереи
    $('.gallery-item').hover(
        function() {
            // Что делать при наведении курсора
            $(this).css('box-shadow', '0 8px 16px rgba(0, 0, 0, 0.2)');
        },
        function() {
            // Что делать, когда курсор уходит
            $(this).css('box-shadow', '0 4px 8px rgba(0, 0, 0, 0.1)');
        }
    );
});
