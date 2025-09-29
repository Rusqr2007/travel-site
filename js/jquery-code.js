$(document).ready(function() {
  // Плавное появление секции hero
  $(".hero").hide().fadeIn(1000);

  // Раскрытие описаний туров в таблице
  $(".toggle-details").click(function() {
    $(this).siblings(".details-content").slideToggle();
  });

  // Анимация при наведении на ссылки меню
  $(".nav-link").hover(
    function() {
      $(this).css("color", "#0066ff");
    },
    function() {
      $(this).css("color", "");
    }
  );
});
