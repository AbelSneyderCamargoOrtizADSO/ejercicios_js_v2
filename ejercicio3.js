/* Crea una función que calcule la longitud de una palabra si es corta o si es larga. (palabras
cortas menores de 5 caracteres). */


function word() {

  let pal = prompt("INGRESE UNA PALABRA")

  if (pal.length < 5) {
    return "LA PALABRA ES CORTA"
  } else {
    return "LA PALABRA ES LARGA"
  }
}

alert(word())