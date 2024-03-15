/* • Escribe una función que tome una cadena y devuelva una nueva cadena sin las vocales. */

let cad = prompt("ESCRIBA UNA FRASE O UNA CADENA ")

function sinvocales(cadena) {

  let sinvocal = "";
  let regex = /^[aeiou]$/

  for (let i = 0; i < cadena.length; i++) {

    if (!(regex.test(cadena[i]))) {
      sinvocal += cadena[i];
    }

  }

  return sinvocal;
}

alert(sinvocales(cad))
