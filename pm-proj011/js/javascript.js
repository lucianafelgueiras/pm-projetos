function $(elemento) {
    return document.querySelector(elemento);
}

function mostrarBotao() {
    $(".resultado").classList.add("escondido");
    $(".button").classList.remove("escondido");
}

function esconderBotao() {
    $(".resultado").classList.remove("escondido");
    $(".button").classList.add("escondido");
}

