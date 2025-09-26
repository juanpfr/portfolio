// Faz o tooltip sumir de vez quando o mouse passa
const tooltip = document.getElementById("tooltip-logo");
const logo = document.querySelector(".logo");

logo.addEventListener("mouseenter", () => {
  tooltip.style.display = "none"; // desaparece e não volta mais
});
