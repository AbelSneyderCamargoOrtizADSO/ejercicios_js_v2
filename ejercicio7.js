/* Crea una función que tome una cadena como parámetro y devuelva la cadena en orden
inverso, por ejemplo, si la cadena de entrada es ‘Hola’, la función debería retornar ‘aloH’. */

let cadena = prompt("INGRESE UNA CADENA")


function inverso(cadena) {
  let inver = ""

  for (let i = cadena.length - 1; i >= 0; i--) {
    inver += cadena[i]
  }

  return inver;
}

alert(inverso(cadena));