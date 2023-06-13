const inputBox = document.getElementById("input");
const results = document.getElementById("results");
const footer = document.getElementById("footer");

const suggestions = document.getElementById("suggestions");
const emptyState = document.getElementById("empty-result");

inputBox.addEventListener("focus", () => {
  results.style.display = "block";
  footer.style.display = "flex";
  suggestions.style.display = "block";
});

inputBox.addEventListener("blur", (e) => {
  results.style.display = "none";
  footer.style.display = "none";
  suggestions.style.display = "none";
  emptyState.style.display = "none";

  e.target.value = "";
});

inputBox.addEventListener("keyup", (e) => {
  if (!e.target.value) {
    suggestions.style.display = "block";
    emptyState.style.display = "none";
  } else {
    suggestions.style.display = "none";
    emptyState.style.display = "flex";
  }
});
