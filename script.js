document.addEventListener("DOMContentLoaded", () => {
        const btn = document.getElementById("hamburguer-appearance");
        const menu = document.getElementById("hamburguer-items");

        btn.addEventListener("click", () => {
                menu.classList.toggle("active");
        });
});
