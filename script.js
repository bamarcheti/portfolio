function toggleMode() {
  const html = document.documentElement;
  html.classList.toggle("light");
}

function getYear() {
  const yearElement = document.querySelector("#year");
  const currentYear = new Date().getFullYear();
  yearElement.textContent = currentYear;
}
