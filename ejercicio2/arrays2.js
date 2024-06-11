'use strict';

//Escribir una función que reciba un array de números y devuelva la suma de todos sus elementos.



function sumaElementosMayoresACinco(arr) {
    let suma = 0;
    let i = 0;
    while (i < arr.length) {
        if (arr[i] > 5) {
            suma += arr[i];
        }
        i++;
    }
    alert(`La suma de los elementos mayores a cinco es: ${suma}`);
}


const miArray = [3, 8, 2, 10, 6, 4];
sumaElementosMayoresACinco(miArray);

