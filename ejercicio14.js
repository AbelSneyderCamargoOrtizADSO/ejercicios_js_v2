/* • Escribe una función que genere de forma aleatoria un numero entre 1 y 10, y verifica si
este numero es par o impar. */

function pareimpar() {
  let numalea = Math.floor(Math.random() * (1000 - 1) + 1);

  if (numalea % 2 == 0) {
    return `EL NUMERO GENERADO ES ${numalea}
    ESTE NUMERO ES PAR`
  } else {
    return `EL NUMERO GENERADO ES ${numalea}
    ESTE NUMERO ES IMPAR`
  }

}

alert(pareimpar())