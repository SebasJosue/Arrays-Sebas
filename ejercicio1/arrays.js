'use strict';

//Escribir una función que reciba un array de strings y muestre cada elemento con su posición.

function mostrarAlumnosConPosicionFor(arr) {
    for (let i = 0; i < arr.length; i++) {
        alert(`Alumno ${i}: ${arr[i]}`);
    }
}


const nombresAlumnos = ["Juan", "María", "Pedro", "Ana"];
mostrarAlumnosConPosicionFor(nombresAlumnos);
