function realizarOperacion() {
    const numero1 = parseFloat(prompt("Ingrese el primer número"));
    const numero2 = parseFloat(prompt("Ingrese el segundo número"));
    
    if (isNaN(numero1) || isNaN(numero2)) {
        alert("Por favor, ingrese números válidos.");
        return;
    }

    const operacion = prompt("Seleccione una operación: suma, resta, multiplicación o división").toLowerCase();
    
    let resultado;

    switch (operacion) {
        case "suma":
            resultado = numero1 + numero2;
            break;
        case "resta":
            resultado = numero1 - numero2;
            break;
        case "multiplicacion":
            resultado = numero1 * numero2;
            break;
        case "division":
            if (numero2 !== 0) {
                resultado = numero1 / numero2;
            } else {
                resultado = "Error: División por cero";
            }
            break;
        default:
            resultado = "Operación no válida";
    }

    alert("El resultado es: " + resultado);
}

realizarOperacion();
