//Clicking .faq-question will toggle the .faq-answer class .show - vanilla js

const faqQuestions = document.querySelectorAll(".faq-question");
//faqAnswer is the next .faq-answer sibling of the faqQuestion

faqQuestions.forEach((faqQuestion) => {
  faqQuestion.addEventListener("click", () => {
    const arrow = faqQuestion.querySelector("i");

    const faqAnswer = faqQuestion.nextElementSibling;
    faqAnswer.classList.toggle("show");
    arrow.classList.toggle("fa-caret-up");
    arrow.classList.toggle("fa-caret-down");
  });
});
