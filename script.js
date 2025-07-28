document.addEventListener("DOMContentLoaded", () => {
        const btn = document.getElementById("hamburguer-appearance");
        const menu = document.getElementById("hamburguer-items");

        btn.addEventListener("click", () => {
                menu.classList.toggle("active");
        });

        alert("Este portfólio não está mais sendo atualizado. Em breve, estarei lançando um novo com design melhorado e mais projetos");
});
