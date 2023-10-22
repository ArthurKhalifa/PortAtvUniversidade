
/*===================== ANIMATION =====================*/
const menu = document.getElementById("botao");

menu.onclick = function () {
    menu.classList.toggle("openmenu");
}

// ============================ ACTIVE HEADER BY SCROLL ============================ //
const actInicio = document.querySelector("#inicio")
window.addEventListener("scroll", () => {
    if (window.pageYOffset >= 0 && window.pageYOffset < 800) {
        actInicio.classList.add("active")
    } else {
        actInicio.classList.remove("active")
    }
})
//===========================
const actSobre = document.querySelector("#sobre")
window.addEventListener("scroll", () => {
    if (window.pageYOffset >= 800 && window.pageYOffset < 1700) {
        actSobre.classList.add("active")
    } else {
        actSobre.classList.remove("active")
    }
})
// =========================
const actProjetos = document.querySelector("#projetos")
window.addEventListener("scroll", () => {
    if (window.pageYOffset >= 1700 && window.pageYOffset < 2600) {
        actProjetos.classList.add("active")
    } else {
        actProjetos.classList.remove("active")
    }
})
// =========================
const actContato = document.querySelector("#contato")
window.addEventListener("scroll", () => {
    if (window.pageYOffset >= 2600) {
        actContato.classList.add("active")
    } else {
        actContato.classList.remove("active")
    }
})

// ============================= HAMBURGUER ACTION ============================== //
const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navbarLinks = document.getElementsByClassName('header-links')[0];

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
});


// ========== ACTIVE HEADER LINKS ========== // 
$(document).on('click', 'ul li', function () {
    $(this).addClass('active').siblings().removeClass('active')
})
