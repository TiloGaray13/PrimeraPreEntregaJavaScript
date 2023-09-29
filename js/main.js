// Declaración de variables necesarias
let resultado;

// Declaración de un objeto para manejar operaciones
const operaciones = {
    suma: function (numero1, numero2) {
        return numero1 + numero2;
    },
    resta: function (numero1, numero2) {
        return numero1 - numero2;
    },
    multiplicacion: function (numero1, numero2) {
        return numero1 * numero2;
    },
    division: function (numero1, numero2) {
        if (numero2 !== 0) {
            return numero1 / numero2;
        } else {
            return "Error: División por cero";
        }
    },
    concatenacion: function (texto1, texto2) {
        return texto1 + texto2;
    },
    porcentaje: function (numero, porcentaje) {
        return (numero * porcentaje) / 100;
    }
};

// Declaración de un array para almacenar resultados
const resultados = [];

// Función para realizar operaciones
function realizarOperacion() {
    const operacion = prompt("Ingrese una operación: suma, resta, multiplicación, división, concatenación o porcentaje").toLowerCase();

    switch (operacion) {
        case "suma":
        case "resta":
        case "multiplicacion":
        case "division":
        case "concatenacion":
        case "porcentaje":
            const input1 = prompt("Ingrese el primer valor");
            const input2 = prompt("Ingrese el segundo valor");

            const valor1 = parseFloat(input1);
            const valor2 = parseFloat(input2);

            if (isNaN(valor1) || isNaN(valor2)) {
                resultado = "Por favor, ingrese valores numéricos válidos.";
            } else {
                resultado = operaciones[operacion](valor1, valor2);
                resultados.push(resultado);
            }
            break;
        default:
            resultado = "Operación no válida";
    }

    mostrarResultado(resultado);
}

// Función para mostrar el resultado
function mostrarResultado(resultado) {
    alert("El resultado es: " + resultado);
    mostrarResultadosAnteriores();
}

// Función para mostrar resultados anteriores
function mostrarResultadosAnteriores() {
    if (resultados.length > 0) {
        alert("Resultados anteriores: " + resultados.join(", "));
    }
}

// Función para buscar un resultado específico
function buscarResultado() {
    const valorBuscado = parseFloat(prompt("Ingrese el valor que desea buscar"));

    if (isNaN(valorBuscado)) {
        alert("Por favor, ingrese un valor numérico válido.");
        return;
    }

    const indice = resultados.indexOf(valorBuscado);

    if (indice !== -1) {
        alert(`El valor ${valorBuscado} se encuentra en la posición ${indice} de los resultados.`);
    } else {
        alert(`El valor ${valorBuscado} no se encuentra en los resultados.`);
    }
}

// Función para filtrar resultados por valor
function filtrarResultadosPorValor() {
    const valorFiltro = parseFloat(prompt("Ingrese el valor por el cual desea filtrar los resultados"));

    if (isNaN(valorFiltro)) {
        alert("Por favor, ingrese un valor numérico válido.");
        return;
    }

    const resultadosFiltrados = resultados.filter(resultado => resultado === valorFiltro);

    if (resultadosFiltrados.length > 0) {
        alert("Resultados filtrados: " + resultadosFiltrados.join(", "));
    } else {
        alert(`No se encontraron resultados iguales a ${valorFiltro}.`);
    }
}
