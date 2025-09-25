// Код на чистом JavaScript для кнопки "Читать далее"
document.addEventListener('DOMContentLoaded', () => {
    const readMoreBtn = document.getElementById('read-more-btn');
    const aboutTextWrapper = document.querySelector('.about-text-wrapper');

    readMoreBtn.addEventListener('click', () => {
        if (aboutTextWrapper.classList.contains('expanded')) {
            aboutTextWrapper.classList.remove('expanded');
            readMoreBtn.textContent = 'Читать далее';
        } else {
            aboutTextWrapper.classList.add('expanded');
            readMoreBtn.textContent = 'Скрыть';
        }
    });

    // jQuery-код для анимации и плавного скролла
    $(function() {
        // Плавное появление секций
        $('.service-card, .about-section, .stats-section').hide().fadeIn(1500);

        // Плавный скролл при клике на ссылки в навигации
        $('a[href^="#"]').on('click', function(event) {
            const target = $(this.hash);
            if (target.length) {
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top - 70 // -70px для отступа от навигации
                }, 800);
            }
        });
    });
});
