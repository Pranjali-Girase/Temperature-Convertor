const convertFaren = () => {
    var celsius = parseFloat(document.querySelector("#celsius").value);

    var farenResult = (1.8 * celsius) + 32;
    var a = farenResult.toFixed(2);

    document.querySelector("#celsius").value = celsius;
    document.querySelector("#faren").value = a;
}

const convertCelsius = () => {
    var faren = parseFloat(document.querySelector("#faren").value);

    var celsiusResult = (faren - 32) / 1.8;
    var b = celsiusResult.toFixed(2);

    document.querySelector("#celsius").value = b;
    document.querySelector("#faren").value = faren;
}

const reset = () => {
    document.querySelector("#celsius").value = " ";
    document.querySelector("#faren").value = " ";
}
