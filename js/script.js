// Переключение темы
document.addEventListener("DOMContentLoaded", () => {
  const themeBtn = document.getElementById("theme-toggle");
  if (themeBtn) {
    themeBtn.addEventListener("click", () => {
      document.body.classList.toggle("dark-theme");
      localStorage.setItem("theme", document.body.classList.contains("dark-theme") ? "dark" : "light");
    });
    // Загружаем сохранённую тему
    if (localStorage.getItem("theme") === "dark") {
      document.body.classList.add("dark-theme");
    }
  }

  // Бургер-меню
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("nav-menu");
  if (hamburger && navMenu) {
    hamburger.addEventListener("click", () => {
      navMenu.classList.toggle("open");
    });
  }

  // Проверка формы (главная страница Aurora Travel)
  const form = document.getElementById("form");
  const formMessage = document.getElementById("form-message");
  if (form && formMessage) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      formMessage.style.display = "block";
      formMessage.textContent = "✅ Спасибо! Ваша заявка отправлена.";
      form.reset();
    });
  }
});
