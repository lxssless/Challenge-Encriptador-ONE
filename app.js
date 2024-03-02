function validarTexto(cifrar) {
    var textoOriginal = document.getElementById("texto").value;
    var regex = /[A-ZÁÉÍÓÚÜáéíóúü!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/gm;
    if (textoOriginal === "") { 
        alert("El campo está vacío");
        porDefecto();
    } else if (regex.test(textoOriginal)) {
        alert("El texto no puede contener letras mayúsculas ni caracteres especiales.");
        document.getElementById("texto").value = "";
        porDefecto();
    } else {
        if (cifrar) {
            cifrarTexto(); 
        } else {
            descifrarTexto(); 
        }
    }
}

function cifrarTexto() {
    var textoOriginal = document.getElementById("texto").value;
    var textoOriginal = textoOriginal.toLowerCase();
    var textoCifrado = textoOriginal.replace(/[aeiou]/mg, function(leer){
    const lectura ={
        'a':'ai',
        'e':'enter',
        'i':'imes',
        'o':'ober',
        'u':'ufat'
    };
    return lectura[leer];
    });
    document.getElementById("resultado").innerText = textoCifrado;
    texto.value="";
    mostrarResultado();
}

function mostrarResultado(){
    document.getElementById("defecto").style.display="none";
    document.getElementById("persona").style.display ="none";
    document.getElementById("resultado").style.display ="block";
    document.getElementById("copiar").style.display ="block";
}

function porDefecto(){
    document.getElementById("defecto").style.display="block";
    document.getElementById("persona").style.display ="block";
    document.getElementById("resultado").style.display ="none";
    document.getElementById("copiar").style.display ="none";
    let button=document.getElementById("copiar");
    button.textContent="Copiar";
}

function descifrarTexto() {
    var textoCifrado = document.getElementById("texto").value;
    var textoCifrado = textoCifrado.toLowerCase();
    var textoDescifrado = textoCifrado.replace(/(ai|enter|imes|ober|ufat)/mg, function(leer) {
        const lectura = {
            'ai': 'a',
            'enter': 'e',
            'imes': 'i',
            'ober': 'o',
            'ufat': 'u'
        };
        return lectura[leer];
    });
    document.getElementById("resultado").innerText = textoDescifrado;
    texto.value="";
    mostrarResultado(); 
}

function botonCopiar(){
    let text=document.getElementById("resultado");
    let button=document.getElementById("copiar");
    navigator.clipboard.writeText(text.textContent);
    button.textContent="Copiado";
    mostrarResultado(); 
}
