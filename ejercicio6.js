/* • Crea una función de nos devuelva el elemento mayor de un arreglo de números. */

let arreglo = [5, 7, 4, 15, 8, 9, 12];

function mayor() {

  let mayor = 0;

  for (let i = 0; i < arreglo.length; i++) {

    let num = arreglo[i];

    if (num > mayor) {
      mayor = num
    }
  }

  return mayor
}

alert(`EL ARREGLO ES [${arreglo}]
EL ELEMENTO MAYOR DEL ARREGLO ES: ${mayor()}`)