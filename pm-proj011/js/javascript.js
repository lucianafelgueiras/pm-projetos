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

$(".button").addEventListener("click", function() {
    const altura = $("#altura");
    const peso = $("#peso");
    
    if (altura.value == ""){
        altura.focus();
    }
    else if(peso.value == ""){
        peso.focus();
    }
    else {
        calcResult();
        esconderBotao();
    }
});

$(".voltar").addEventListener("click", function() {
    mostrarBotao();
});

function calcResult() {
    
    const imc = calcImc ($("#peso").value, $("#altura").value);
    
    $(".imcValor").innerHTML = imc.toLocaleString("pt-BR", {maximumFractionDigits: 2});
    $(".imcDescr").innerHTML = descricaoImc(imc);  
}

function calcImc(peso, altura) {
    return peso / (altura * altura);
}

function descricaoImc(imc){
    if(imc < 16){
      return "Magreza Grave";  
    }
    else if((imc >=16)&&(imc < 17)){
            return "Magreza Moderada";
    }
    else if ((imc >=17) && (imc <18.5)){
        return "Magreza Leve";
    }
    else if((imc >= 18.5)&&(imc < 25)){
        return "Saudável";
    }
    else if((imc >= 25)&&(imc < 30)){
        return "Sobrepeso";
    }
    else if((imc >=30)&&(imc <35)){
        return "Obesidade Leve";
    }
    else if((imc >=35)&&(imc <40)){
        return "Obesidade Severa";
    }
    else(imc >=40)
        return "Obesidade Mórbida";
}

