const btn_landing = document.querySelector(".landing");
const lado3_landing = document.querySelector(".card-demonstracao");
const btn_restaurante = document.querySelector(".restaurante");
const lado3_restaurante = document.querySelector(".card-demonstracao2");
const btn_web_site = document.querySelector(".web_site");
const lado3_web_site = document.querySelector(".card-demonstracao3");

function toggleActive(clickedButton, correspondingCard) {
    // Verificar se o cartão correspondente já está ativo
    const isActive = correspondingCard.classList.contains("active");

    // Remover "active" de todos os cartões inicialmente (para ativação exclusiva)
    lado3_landing.classList.remove("active");
    lado3_restaurante.classList.remove("active");
    lado3_web_site.classList.remove("active");

    // Se o cartão correspondente já estiver ativo, remover a classe "active"
    if (isActive) {
        correspondingCard.classList.remove("active");
    } else {
        // Caso contrário, adicionar a classe "active" ao cartão clicado
        correspondingCard.classList.add("active");
    }
}

// Event listeners for each button
btn_landing.addEventListener("click", () => toggleActive(btn_landing, lado3_landing));
btn_restaurante.addEventListener("click", () => toggleActive(btn_restaurante, lado3_restaurante));
btn_web_site.addEventListener("click", () => toggleActive(btn_restaurante, lado3_web_site));