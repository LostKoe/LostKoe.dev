document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("hamburguer-appearance");
  const menu = document.getElementById("hamburguer-items");

  btn.addEventListener("click", () => {
    menu.classList.toggle("active");
  });

  alert("Há uma nova versão deste portfólio em lostkoe.github.io/Portfolio-LostKoe\nTambém aproveite e veja o repositório dele em github.com/LostKoe/Portfolio-LostKoe")
});
