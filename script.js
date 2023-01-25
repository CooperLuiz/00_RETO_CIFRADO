/*`La letra "e" es convertida para "enter"`
`La letra "i" es convertida para "imes"`
`La letra "a" es convertida para "ai"`
`La letra "o" es convertida para "ober"`
`La letra "u" es convertida para "ufat"`*/

var IngresarTexto = document.querySelector(".IngresarTexto");
var TextoIngresado = "";
var botonPresionado = false;

function ocultar(){
    if (botonPresionado){
        document.querySelector(".areaTextoPost").style.display = "block";
        document.querySelector(".botCopiar").style.display = "block";
    } else {
        document.querySelector(".areaTextoPost").style.display = "none";
        document.querySelector(".botCopiar").style.display = "none";
    }
    document.querySelector(".muñecoytexto").style.display = "none";
    document.querySelector(".areaTextoPost").innerHTML = TextoIngresado;
}

var botEncriptar = document.querySelector(".botEncriptar");
botEncriptar.onclick = function(){
    botonPresionado = true;
    TextoIngresado = IngresarTexto.value;
    TextoIngresado = TextoIngresado.replace(/e/g, "enter");
    TextoIngresado = TextoIngresado.replace(/i/g, "imes");
    TextoIngresado = TextoIngresado.replace(/a/g, "ai");
    TextoIngresado = TextoIngresado.replace(/o/g, "ober");
    TextoIngresado = TextoIngresado.replace(/u/g, "ufat");
    ocultar();
}

var botDesencriptar = document.querySelector(".botDesencriptar");
botDesencriptar.onclick = function(){
    botonPresionado = true;
    TextoIngresado = IngresarTexto.value;
    TextoIngresado = TextoIngresado.replace(/enter/g, "e");
    TextoIngresado = TextoIngresado.replace(/imes/g, "i");
    TextoIngresado = TextoIngresado.replace(/ai/g, "a");
    TextoIngresado = TextoIngresado.replace(/ober/g, "o");
    TextoIngresado = TextoIngresado.replace(/ufat/g, "u");
    ocultar();
}

var botCopiar = document.querySelector(".botCopiar");
botCopiar.onclick = function(){
    var textocopiado = document.querySelector(".areaTextoPost");
    navigator.clipboard.writeText(textocopiado.innerHTML).then (function(){
        alert("Texto copiado");
        }, function(err){
            alert ("Error al copiar el texto");
        });
    }





