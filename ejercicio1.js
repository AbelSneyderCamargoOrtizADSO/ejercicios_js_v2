/* • Crea una función que reciba dos números como parámetros y devuelva el mayor de
ellos. */

let num1 = parseFloat(prompt("INGRESE EL PRIMER NUMERO"))
let num2 = parseFloat(prompt("INGRESE EL SEGUNDO NUMERO"))


function numeros(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}


alert(numeros(num1, num2));