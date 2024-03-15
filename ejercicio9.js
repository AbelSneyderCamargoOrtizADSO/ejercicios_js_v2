/* • Genera un patrón de asteriscos en forma de pirámide. */

let pira = "";

for (let i = 1; i <= 5; i++) {
  let fila = "";
  for (let j = 1; j <= i; j++) {
    fila += " " + "*"
  }
  pira += fila + "\n"
}

alert(pira)