/* • Implemente una función que sume dos números y devuelva su suma en binario, el
número binario devuelto debe ser una cadena. */

let num1 = parseFloat(prompt("INGRESE EL PRIMER NUMERO"))
let num2 = parseFloat(prompt("INGRESE EL SEGUNDO NUMERO"))

function numeros(a, b) {

  let suma = a + b

  return suma.toString(2)
}

alert(`LA SUMA DE LOS NUMEROS ${num1} + ${num2} EN BINARIO ES: ${numeros(num1, num2)}`)

