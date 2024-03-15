/* • Crea una función que tome un número como argumento y devuelva la cadena si el
numero es par o impar. */

let num = parseFloat(prompt("INGRESE UN NUMERO"));

function numero(num) {
  if (isNaN(num)) {
    return "INGRESE UN NUMERO VALIDO"
  } else if (num % 2 == 0) {
    return "EL NUMERO ES PAR"
  } else {
    return "EL NUMERO ES IMPAR"
  }
}

alert(numero(num));