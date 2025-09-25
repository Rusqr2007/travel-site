// Автопрокрутка отзывов
document.addEventListener('DOMContentLoaded', function() {
  const reviews = document.querySelectorAll('.review');
  let currentReview = 0;
  if (reviews.length > 1) {
    reviews.forEach((r, i) => r.style.display = i === 0 ? 'block' : 'none');
    setInterval(() => {
      reviews[currentReview].style.display = 'none';
      currentReview = (currentReview + 1) % reviews.length;
      reviews[currentReview].style.display = 'block';
    }, 5000);
  }
});
