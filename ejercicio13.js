/* • Crea una función que tome un conjunto de números y devuelva el inverso aditivo de cada
uno. Todo los positivos se devuelve negativo y todos los negativos se devuelve positivo. */

let conjunto = [1, -6, 4, 7, -56, 13, 4, -8, -3];
let inverso = [];

function invaditi(conjunto) {

  for (let i = 0; i < conjunto.length; i++) {

    let numinv = conjunto[i] * -1;

    inverso.push(numinv);
  }
}

invaditi(conjunto);

alert(` LA CADENA DE NUMEROS ES: [${conjunto}]
EL INVERSO ADITIVO DE LA CADENA ES: [${inverso}]`)