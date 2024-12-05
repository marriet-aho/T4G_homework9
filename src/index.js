// Change the title's style and background
let title = document.querySelector("h1");
title.style.color = "white";
title.style.backgroundColor = "orange"; // orange
title.style.padding = "20px";
title.style.textTransform = "mixed case";


// Update the content of each paragraph and apply new styles
let questions = document.querySelectorAll(".question");
questions.forEach((question, index) => {
  // Modify content based on position
  if (index === 0) question.innerHTML = "I know now what the DOM is 😎😎";
  else if (index === 1) question.innerHTML = "I know how to access/select elements in the DOM. 👊";
  else if (index === 2) question.innerHTML = "I know how to use the style methods to change the style of an element in the DOM ✅";
  else if (index === 3) question.innerHTML = "I know how the styling properties differ in JS from CSS 👌";
  else if (index === 4) question.innerHTML = "Yes I did it! I manipulated the DOM and styled my elements 😍😍😍😍😍😍😍😍😍😍😍😍";

  // Apply unique styles to each paragraph
  let colors = ["#d9d9d9", "#ffeb3b", "#4caf50", "#9c27b0", "#000000"];
  question.style.backgroundColor = colors[index];
  question.style.color = index === 4 ? "#fff" : "#000";
  question.style.padding = "15px";
  question.style.margin = "10px auto";
  question.style.borderRadius = "5px";
  question.style.fontSize = "1.1rem";
  question.style.fontWeight = "bold";
  question.style.textAlign = "center";
});



