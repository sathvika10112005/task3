// Carousel
const carousel = document.getElementById("carouselImages");
if (carousel) {
  const totalSlides = carousel.children.length;
  let index = 0;

  function showSlide(i) {
    index = (i + totalSlides) % totalSlides;
    carousel.style.transform = `translateX(${-index * 100}%)`;
  }

  window.nextSlide = () => showSlide(index + 1);
  window.prevSlide = () => showSlide(index - 1);

  setInterval(() => showSlide(index + 1), 4000);
}

// Quiz
const quizForm = document.getElementById("quizForm");
if (quizForm) {
  quizForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const correct = {
      q1: "a",
      q2: "c",
      q3: "a",
      q4: "b",
      q5: "a"
    };
    let score = 0;
    for (let key in correct) {
      const selected = document.querySelector(`input[name="${key}"]:checked`);
      const answerBox = document.getElementById(`a${key[1]}`);
      if (selected) {
        if (selected.value === correct[key]) {
          score++;
          answerBox.textContent = "✔ Correct!";
        } else {
          answerBox.textContent = `✖ Correct Answer: ${correct[key].toUpperCase()}`;
        }
      } else {
        answerBox.textContent = `✖ You did not select an answer. Correct: ${correct[key].toUpperCase()}`;
      }
    }
    document.getElementById("result").textContent = `You scored ${score} out of 5.`;
  });
}
