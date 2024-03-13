// Estado inicial
document.getElementById('SiEncontrado').style.display = "none";
const encriptarBtn = document.getElementById('encriptarBtn');
const desencriptarBtn = document.getElementById('desencriptarBtn');
const copiarBtn = document.getElementById('copiarBtn');

// Diccionario
const diccionario = {
    a: "ai",
    e: "enter",
    i: "imes",
    o: "ober",
    u: "ufat"
    á: "ai",
    é: "enter",
    í: "imes",
    ó: "ober",
    ú: "ufat"
};

// Boton Encriptar 
encriptarBtn.addEventListener('click', () => {
     
    let input = document.getElementById('input').value.toLowerCase();
    let nuevoTexto = "";

    for (let letra of input) {
        // Evalua las condiciones truthly o falsely si retorna o no retorna valor
        if (diccionario[letra]) {
            nuevoTexto += diccionario[letra];
        } else {
            nuevoTexto += letra;
        }
    }
    document.getElementById('NoEncontrado').style.display = "none";
    document.getElementById('SiEncontrado').style.display = "";
    document.getElementById('output-text').value = nuevoTexto;
    return;

});

// Boton Desencriptar
desencriptarBtn.addEventListener('click', () => {
    let input = document.getElementById("input").value.toLowerCase();

    // Itera sobre el diccionario pasando el input, key y value
    for (let key in diccionario){
        input = reemplazar(input, diccionario[key], key)
    }

    console.log(input);
    document.getElementById('NoEncontrado').style.display = "none";
    document.getElementById('SiEncontrado').style.display = "";
    document.getElementById('output-text').value = input;
    return;
});

// Boton Copiar
copiarBtn.addEventListener('click', () => {
    let texto = document.getElementById("output-text").value;
    try {
        // Operacion asincrona investigar
        navigator.clipboard.writeText(texto);
    } catch (err) {
        console.error('Error al copiar texto: ', err);
    }
}); 

function reemplazar(texto, palabra, llave){
    let longitud = palabra.length;
    let nuevoTexto = "";

    for (let i = 0; i < texto.length; i++) {
        // Si substring coincide con palabra se asigna la llave a nuevoTexto
        if (texto.substring(i, i + longitud) == palabra) {
            nuevoTexto += llave;
            // Se salta la longitud de la palabra al encontrarla, resta 1 porque el for suma 1
            i += longitud - 1;
        } else {
            // Si no coincide se asigna la letra original a nuevoTexto
            nuevoTexto += texto[i];
        }
    }
    return nuevoTexto;
    
}
