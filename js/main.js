// 1) Se precisa un algoritmo que reciba por prompt el mail del usuario y que valide si este mail contiene un "@". Para ello se precisará un bucle que pueda recorrer cada caracter de este valor y que en base a una condición, refleje como alerta si "Es un mail válido" o "Es un mail inválido", en el caso de que no contenga "@".

const email = prompt("Ingrese su correo electrónico");
let esValido = false; 

for (let i = 0; i < email.length; i++) {
    if (email[i] === "@") {
        esValido = true; 
        break; 
    }
}

if (esValido) {
    alert("Es un correo válido");
} else {
    alert("Es un correo inválido");
}