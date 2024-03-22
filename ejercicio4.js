/* • Crea una función para calcular cuantas silabas tiene cada palabra, imprime el resultado en la consola. */

let palabra = prompt("INGRESE UNA PALABRA");

function contarSilabas(palabra) {
    palabra = palabra.toLowerCase().trim(); 
    let numSílabas = 0;
    let esDiptongo = false;

    function esVocal(letra) {
        return 'aeiouáéíóú'.includes(letra);
    }


    for (let i = 0; i < palabra.length; i++) {

        if (esVocal(palabra[i])) {

            if (!esDiptongo) {
                numSílabas++;

                if (i < palabra.length - 1 && esVocal(palabra[i + 1])) {
                    let sílaba = palabra[i] + palabra[i + 1];

                    if ((sílaba === 'ai' || sílaba === 'ei' || sílaba === 'oi' || sílaba === 'au' || sílaba === 'eu' || sílaba === 'iu')) {
                        esDiptongo = true;
                    }
                }
            } else {
                esDiptongo = false;
            }
        }
    }

    return numSílabas;
}

alert(`LA PALABRA TIENE ${contarSilabas(palabra)} SILABAS`);

