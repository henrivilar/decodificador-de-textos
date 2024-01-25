function receberTexto(string) {
    const inputElement = document.getElementById('inputTexto');
    const texto = inputElement.value;
    const textoRevertido = texto.split('').reverse().join('');
    console.log(textoRevertido);
}
