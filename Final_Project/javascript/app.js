// Selecting all sections with class of section
const yogurts = document.querySelectorAll(".yogurt");

// On click event for each section
yogurts.forEach((yogurt) => {
  yogurt.addEventListener("click", () => {
    // and add it to the selected section
    yogurt.classList.add("active");
  });
  yogurt.addEventListener("mouseout", () => {
    // and add it to the selected section
    yogurt.classList.remove("active");
  });
});
