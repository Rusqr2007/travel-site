// === VANILLA JAVASCRIPT ===

// Мобильное меню (гамбургер)
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', function() {
    navMenu.classList.toggle('active');
    
    // Анимация гамбургера
    hamburger.classList.toggle('active');
});

// Смена темы
const themeToggle = document.getElementById('theme-toggle');

themeToggle.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme');
    
    if (document.body.classList.contains('dark-theme')) {
        themeToggle.textContent = '☀️ Светлая тема';
        localStorage.setItem('theme', 'dark');
    } else {
        themeToggle.textContent = '🌙 Темная тема';
        localStorage.setItem('theme', 'light');
    }
});

// Загрузка сохраненной темы (имитация localStorage)
let savedTheme = localStorage.getItem('theme') || 'light'; 
if (savedTheme === 'dark') {
    document.body.classList.add('dark-theme');
    themeToggle.textContent = '☀️ Светлая тема';
}

// Проверка формы
const form = document.querySelector('.form');
form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const inputs = form.querySelectorAll('input[required], select');
    let isValid = true;
    
    inputs.forEach(input => {
        if (!input.value.trim()) {
            input.style.border = '2px solid #e74c3c';
            isValid = false;
        } else {
            input.style.border = '2px solid #27ae60';
        }
    });
    
    if (isValid) {
        alert('🎉 Заявка отправлена! Мы свяжемся с вами в ближайшее время.');
        form.reset();
    } else {
        alert('⚠️ Пожалуйста, заполните все обязательные поля.');
    }
});

// === JQUERY КОД ===
$(document).ready(function() {
    // 1. Анимация появления формы при клике на главную кнопку
    $('#discover-btn').click(function() {
        $('#quick-form').slideToggle(800);
        $(this).text($(this).text() === 'Открыть мир' ? 'Свернуть форму' : 'Открыть мир');
    });

    // 2. Hover эффект для карточек направлений
    $('.destination-card').hover(
        function() {
            $(this).find('img').css({
                'transform': 'scale(1.1)',
                'transition': 'transform 0.3s ease'
            });
        },
        function() {
            $(this).find('img').css({
                'transform': 'scale(1)',
                'transition': 'transform 0.3s ease'
            });
        }
    );

    // 3. Анимация кнопок бронирования
    $('.book-btn').click(function() {
        const originalText = $(this).text();
        $(this).text('Бронируем...').prop('disabled', true);
        
        setTimeout(() => {
            $(this).text('✅ Забронировано!').css('background', '#27ae60');
            
            setTimeout(() => {
                $(this).text(originalText)
                       .prop('disabled', false)
                       .css('background', '');
            }, 2000);
        }, 1500);
    });

    // 4. Плавная прокрутка к секциям
    $('a[href^="#"]').click(function(e) {
        e.preventDefault();
        const target = $($(this).attr('href'));
        if (target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top - 80
            }, 800);
        }
    });

    // 5. Появление элементов при прокрутке
    $(window).scroll(function() {
        $('.feature-item, .destination-card').each(function() {
            const elementTop = $(this).offset().top;
            const windowBottom = $(window).scrollTop() + $(window).height();
            
            if (elementTop < windowBottom - 100) {
                $(this).fadeIn(600);
            }
        });
    });

    // 6. Динамическое изменение цен при наведении на таблицу
    $('.price-table tbody tr').hover(
        function() {
            $(this).find('td:last-child').css({
                'color': '#e74c3c',
                'font-weight': 'bold',
                'font-size': '1.2em'
            });
        },
        function() {
            $(this).find('td:last-child').css({
                'color': '',
                'font-weight': '',
                'font-size': ''
            });
        }
    );
});
