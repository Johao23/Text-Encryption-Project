document.addEventListener("DOMContentLoaded", function() {
    // This function will be executed when the DOM is fully loaded
    const inputText = document.getElementById("inputText");
    inputText.addEventListener("input", function() {
      // This function will be executed whenever the input text changes
        this.value = this.value.replace(/[^a-z\s]/g, '');
    });
});

function encriptarTexto() {
    var texto = document.getElementById("inputText").value;

    if (texto.trim() === "") {
        campoResultadoInicial();
    } else {
        var textoEncriptado = texto.replace(/e/g, "enter")
                                .replace(/i/g, "imes")
                                .replace(/a/g, "ai")
                                .replace(/o/g, "ober")
                                .replace(/u/g, "ufat");
        document.getElementById("resultadoTexto").innerText = textoEncriptado;
        mostrarResultado()
    };
};

function desencriptarTexto() {
    var texto = document.getElementById("inputText").value;

    if (texto.trim() === "") {
        campoResultadoInicial();
    } else {
        var textoDesencriptado = texto.replace(/enter/g, "e")
                                    .replace(/imes/g, "i")
                                    .replace(/ai/g, "a")
                                    .replace(/ober/g, "o")
                                    .replace(/ufat/g, "u");
        document.getElementById("resultadoTexto").innerText = textoDesencriptado;
        mostrarResultado()
    };
};

function campoResultadoInicial() {
    document.getElementById('sinResultado').removeAttribute('hidden');
    document.getElementById('sinResultadoImagen').removeAttribute('hidden');
    document.getElementById('sinResultadoTexto').removeAttribute('hidden');
    document.getElementById('sinResultadoTexto1').removeAttribute('hidden');
    document.getElementById('sinResultadoTexto2').removeAttribute('hidden');
    document.getElementById('conResultado').setAttribute('hidden', 'true');
    document.getElementById('resultadoTexto').setAttribute('hidden', 'true');
    document.getElementById('copyButton').setAttribute('hidden', 'true');
}

function mostrarResultado() {
    document.getElementById('sinResultado').setAttribute('hidden', 'true');
    document.getElementById('sinResultadoImagen').setAttribute('hidden', 'true');
    document.getElementById('sinResultadoTexto').setAttribute('hidden', 'true');
    document.getElementById('sinResultadoTexto1').setAttribute('hidden', 'true');
    document.getElementById('sinResultadoTexto2').setAttribute('hidden', 'true');
    document.getElementById('conResultado').removeAttribute('hidden');
    document.getElementById('resultadoTexto').removeAttribute('hidden');
    document.getElementById('copyButton').removeAttribute('hidden');
}

function copiarTexto() {
    var texto = document.getElementById("resultadoTexto").innerText;
    navigator.clipboard.writeText(texto)
};