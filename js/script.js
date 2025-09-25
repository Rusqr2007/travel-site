// Тема (светлая/темная) на JS
document.getElementById('theme-toggle').onclick = function () {
    document.body.classList.toggle('dark-theme');
    this.textContent = document.body.classList.contains('dark-theme') ? '🌞' : '🌙';
};

// Меню гамбургер на JS + jQuery
$("#hamburger").click(function(){
    $("#nav-menu").slideToggle().toggleClass("show");
});

// Проверка формы на заполнение (JS)
document.getElementById('form').onsubmit = function(e) {
    e.preventDefault();
    let name = document.getElementById('name').value.trim();
    let email = document.getElementById('email').value.trim();
    let phone = document.getElementById('phone').value.trim();
    let dest = document.getElementById('destination').value;

    if(!name || !email || !phone || !dest) {
        $("#form-message").html("Пожалуйста, заполните все поля!").fadeIn();
        return false;
    }
    $("#form-message").html("Спасибо, заявка отправлена!").fadeIn().delay(2000).fadeOut();
    this.reset();
    return false;
};

// Поиск по направлениям (jQuery)
$("#search-form").submit(function(e){
    e.preventDefault();
    let val = $("#searchInput").val().toLowerCase();
    $(".cities-list figure").each(function(){
        let text = $(this).text().toLowerCase();
        $(this).parent().toggle(text.indexOf(val) > -1 || !val);
    });
});
