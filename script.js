const contentBox = document.querySelectorAll(".contentBox");

// buttons.forEach((button) => {
//   button.addEventListener("click", () => {
//     const answer = button.nextElementSibling;
//     if (answer.style.display === "block") {
//       answer.style.display = "none";
//       button.classList.remove("active");
//     } else {
//       answer.style.display = "block";
//       button.classList.add("active");
//     }
//   });
// });

contentBox.forEach((box) => {
  box.addEventListener("click", () => {
    const question = box.firstElementChild;
    question.classList.toggle("question-active");

    const plusIcon = box.firstElementChild.firstElementChild;
    if (plusIcon.getAttribute("src") === "./assets/images/icon-plus.svg") {
      plusIcon.setAttribute("src", "./assets/images/icon-minus.svg");
    } else {
      plusIcon.setAttribute("src", "./assets/images/icon-plus.svg");
    }

    const answer = box.firstElementChild.nextElementSibling;
    answer.classList.toggle("expand");
  });
});
