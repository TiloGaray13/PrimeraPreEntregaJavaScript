// Obtener elementos del DOM
const operacionSelect = document.getElementById("operacion");
const valor1Input = document.getElementById("valor1");
const valor2Input = document.getElementById("valor2");
const realizarOperacionButton = document.getElementById("realizarOperacion");
const resultadoDiv = document.getElementById("resultado");
const mostrarResultadosAnterioresButton = document.getElementById("mostrarResultadosAnteriores");
const buscarResultadoButton = document.getElementById("buscarResultado");
const valorBuscadoInput = document.getElementById("valorBuscado");
const filtrarResultadosPorValorButton = document.getElementById("filtrarResultadosPorValor");
const valorFiltroInput = document.getElementById("valorFiltro");

// Declaración de variables necesarias
let resultados = [];

// Función para realizar operaciones
function realizarOperacion() {
    const operacion = operacionSelect.value;
    const valor1 = parseFloat(valor1Input.value);
    const valor2 = parseFloat(valor2Input.value);

    if (isNaN(valor1) || isNaN(valor2)) {
        resultadoDiv.textContent = "Por favor, ingrese valores numéricos válidos.";
        return;
    }

    let resultado;

    switch (operacion) {
        case "suma":
            resultado = sumar(valor1, valor2);
            break;
        case "resta":
            resultado = restar(valor1, valor2);
            break;
        case "multiplicacion":
            resultado = multiplicar(valor1, valor2);
            break;
        case "division":
            resultado = dividir(valor1, valor2);
            break;
        case "concatenacion":
            resultado = concatenar(valor1, valor2);
            break;
        case "porcentaje":
            resultado = calcularPorcentaje(valor1, valor2);
            break;
        default:
            resultado = "Operación no válida";
    }

    resultadoDiv.textContent = "El resultado es: " + resultado;

    // Guardar resultado en el almacenamiento local (localStorage) como JSON
    resultados.push(resultado);
    localStorage.setItem("resultados", JSON.stringify(resultados));
}

// Función para mostrar resultados anteriores
function mostrarResultadosAnteriores() {
    // Obtener resultados almacenados en el almacenamiento local y convertirlos desde JSON
    const resultadosGuardados = JSON.parse(localStorage.getItem("resultados"));

    if (resultadosGuardados) {
        resultadoDiv.textContent = "Resultados anteriores: " + resultadosGuardados.join(", ");
    } else {
        resultadoDiv.textContent = "No hay resultados anteriores.";
    }
}

// Función para buscar un resultado específico
function buscarResultado() {
    const valorBuscado = parseFloat(valorBuscadoInput.value);

    if (isNaN(valorBuscado)) {
        resultadoDiv.textContent = "Por favor, ingrese un valor numérico válido.";
        return;
    }

    // Buscar el valor en los resultados almacenados
    const resultadosGuardados = JSON.parse(localStorage.getItem("resultados"));

    if (resultadosGuardados) {
        const indice = resultadosGuardados.indexOf(valorBuscado);
        if (indice !== -1) {
            resultadoDiv.textContent = `El valor ${valorBuscado} se encuentra en la posición ${indice} de los resultados.`;
        } else {
            resultadoDiv.textContent = `El valor ${valorBuscado} no se encuentra en los resultados.`;
        }
    } else {
        resultadoDiv.textContent = "No hay resultados almacenados.";
    }
}

// Función para filtrar resultados por valor
function filtrarResultadosPorValor() {
    const valorFiltro = parseFloat(valorFiltroInput.value);

    if (isNaN(valorFiltro)) {
        resultadoDiv.textContent = "Por favor, ingrese un valor numérico válido.";
        return;
    }

    // Filtrar los resultados almacenados que coinciden con el valor de filtro
    const resultadosGuardados = JSON.parse(localStorage.getItem("resultados"));

    if (resultadosGuardados) {
        const resultadosFiltrados = resultadosGuardados.filter(resultado => resultado === valorFiltro);
        if (resultadosFiltrados.length > 0) {
            resultadoDiv.textContent = "Resultados filtrados: " + resultadosFiltrados.join(", ");
        } else {
            resultadoDiv.textContent = `No se encontraron resultados iguales a ${valorFiltro}.`;
        }
    } else {
        resultadoDiv.textContent = "No hay resultados almacenados.";
    }
}

// Asignar eventos a los botones
realizarOperacionButton.addEventListener("click", realizarOperacion);
mostrarResultadosAnterioresButton.addEventListener("click", mostrarResultadosAnteriores);
buscarResultadoButton.addEventListener("click", buscarResultado);
filtrarResultadosPorValorButton.addEventListener("click", filtrarResultadosPorValor);

// Funciones para realizar operaciones
function sumar(numero1, numero2) {
    return numero1 + numero2;
}

function restar(numero1, numero2) {
    return numero1 - numero2;
}

function multiplicar(numero1, numero2) {
    return numero1 * numero2;
}

function dividir(numero1, numero2) {
    if (numero2 !== 0) {
        return numero1 / numero2;
    } else {
        return "Error: División por cero";
    }
}

function concatenar(texto1, texto2) {
    return texto1 + texto2;
}

function calcularPorcentaje(numero, porcentaje) {
    return (numero * porcentaje) / 100;
}
