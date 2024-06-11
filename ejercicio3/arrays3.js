'use strict';

//Escribir una función que reciba un array de números y muestre casa uno de sus elementos multiplicado por 3.

function mostrarElementosMultiplicadosPorTres(arr) {
    for (let i = 0; i < arr.length; i++) {
        alert(`Elemento ${i}: ${arr[i] * 3}`);
    }
}

const miArray = [2, 5, 8, 10];
mostrarElementosMultiplicadosPorTres(miArray);