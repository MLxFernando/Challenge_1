var btnE = document.querySelector(".btn-e");
var btnD = document.querySelector(".btn-d");
var munieco = document.querySelector(".box-img");
var container = document.querySelector(".box-label");
var result = document.querySelector(".result");

btnE.onclick = encriptar;
btnD.onclick = desencriptar;

function recuperarTexto(){
    var box_text = document.querySelector(".box_text")
    return box_text.value
}

function ocultarAdelante(){
    munieco.classList.add("ocultar");
    container.classList.add("ocultar");
}

function encriptarTexto(mensaje){
    var texto = mensaje;
    var textoFinal = "";

    for(var i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textoFinal = textoFinal + "ai"
        }
        else if(texto[i] == "e"){
            textoFinal = textoFinal + "enter"
        }
        else if(texto[i] == "i"){
            textoFinal = textoFinal + "imes"
        }
        else if(texto[i] == "o"){
            textoFinal = textoFinal + "ober"
        }
        else if(texto[i] == "u"){
            textoFinal = textoFinal + "ufat"
        }
        else{
            textoFinal = textoFinal + texto[i]
        }
    }
    return textoFinal;

}

function desencriptarTexto(mensaje){
    var texto = mensaje;
    var textoFinal = "";

    for(var i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textoFinal = textoFinal + "a"
            i = i+1;
        }
        else if(texto[i] == "e"){
            textoFinal = textoFinal + "e"
            i = i+4;
        }
        else if(texto[i] == "i"){
            textoFinal = textoFinal + "i"
            i = i+3;
        }
        else if(texto[i] == "o"){
            textoFinal = textoFinal + "o"
            i = i+3;
        }
        
        else if(texto[i] == "u"){
            textoFinal = textoFinal + "u"
            i = i+3;
        }
        else{
            textoFinal = textoFinal + texto[i];
        }
        
    }

    return textoFinal;

}

function encriptar(){
    ocultarAdelante();
    var box_text = recuperarTexto()
    result.textContent = encriptarTexto(box_text);
}

function desencriptar(){
    ocultarAdelante();
    var box_text = recuperarTexto()
    result.textContent = desencriptarTexto(box_text);
}

const btnCopiar = document.querySelector(".btn-c"); 
    btnCopiar.addEventListener("click", copiar = () => {
    var contenido = document.querySelector(".result").textContent;
    navigator.clipboard.writeText(contenido);

});

function limpiar() {
    document.querySelector('input').value = "";
}