/* • Crea una función que genere la tabla de multiplicar del número 5, no se debe mostrar 5
* 5, nos debe mostrar el resultado para las demás multiplicaciones. */


function tabladel5() {
  let tabla = "";

  for (let i = 1; i <= 10; i++) {
    let multi = i * 5;

    if (i === 5) {
      tabla += "\n"
    } else {
      tabla += `5 x ${i} = ${multi} \n`
    }
  }

  return tabla;

}

alert(tabladel5())