/* • Obtén una serie de número y devuelve la suma de todos los números positivos, si no
tenemos números positivos la sume debe devolver 0. */

let numeros = [-1, 5, 3, -5, -2];
let suma = 0;


for (let i = 0; i < numeros.length; i++) {

  if (numeros[i] <= 0) {
    suma += 0;
  } else {
    suma += numeros[i];
  }

}
alert(`LA SERIA DE NUMEROS ES [${numeros}]
LA SUMA DE LOS NUMEROS POSITIVOS ES: ${suma}`)