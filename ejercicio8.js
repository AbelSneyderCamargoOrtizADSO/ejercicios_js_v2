/* • Crea una función para validar un pin que acepte 4 o 6 caracteres de longitud, solo se
aceptan números, la función debe devolver true si el pin es valido y false si no es válido. */

let pin = parseInt(prompt("INGRESE EL PIN"))

function validar(pin) {
  let regex = /^[\d]{4,6}$/;

  return regex.test(pin);
}

alert(validar(pin))