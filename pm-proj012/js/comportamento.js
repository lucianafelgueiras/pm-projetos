function $("elemento"){ // pega o elemento//
    return document.querySelector("elemento");
}

function trocar(){  //Azul, Laranja, Verde //
    $("#figBot").classList.add("converter");
    
    if("#figBot" == ".converter"){
       document.getElementById("#figBot").classList.remove("converter"); 
       document.getElementById("#figBot").classList.add("convertido"); 
    }else if("#figBot" == ".convertido"){
        $("#figBot").classList.remove("convertido");
    }
}

function tecla(){
    var valor = $(".numBot").value;
    return valor; 
}

// evento botões //
document.getElementById("#figBot").addEventListener("Click", function()){
    trocar();
}
$(".numBot").addEventListener("Click", function(){
    tecla();
}

// teclado //
if(this.valor == ""){
    alert("Erro, digite um valor válido!!")
}
else if(this.valor == "0"){
    ("#display").value = tecla();
}
else if(this.valor == "1"){
    ("#display").value = tecla();
}
else if(this.valor == "2"){
    ("#display").value = tecla();
}
else if(this.valor == "3"){
    ("#display").value = tecla();
}
else if(this.valor == "4"){
    ("#display").value = tecla();
}
else if(this.valor == "5"){
    ("#display").value = tecla();
}
else if(this.valor == "6"){
    ("#display").value = tecla();
}
else if(this.valor == "7"){
    ("#display").value = tecla();
}
else if(this.valor == "8"){
    ("#display").value = tecla();
}
else (this.valor == "9"){
    ("#display").value = tecla();
}