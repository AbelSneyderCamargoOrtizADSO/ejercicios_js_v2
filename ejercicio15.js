/* • Crea una función que convierta números del 0 al 5 en su representación textual, por
ejemplo: “cero”, “uno”, “dos”, “tres” etc. */

let textual = ["Cero", "Uno", "Dos", "Tres", "Cuatro", "Cinco"]
let num = parseFloat(prompt("INGRESE EL NUMERO DEL 0 AL 5"))
let repre;

if (num >= 0 && num <= 5) {
  repre = textual[num];
  alert(repre)
} else {
  alert("INGRESE UN NUMERO VALIDO (0 AL 5)")
}
