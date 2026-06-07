// ACTIVIDAD: CALCULADORA DE ESTUDIANTES

// PARTE 1: Variables y tipos de datos
let miNombre = "Juan";
let miEdad = 20;
let misCalificaciones = [4.2, 3.8, 4.5, 3.9, 4.1];
let soyPremiado = true;

console.log(miNombre, miEdad, misCalificaciones, soyPremiado);


// PARTE 2: Operadores y calculos
function calcularPromedio(calificaciones) {
    let suma = 0;

    for (let i = 0; i < calificaciones.length; i++) {
        suma = suma + calificaciones[i];
    }

    return suma / calificaciones.length;
}

function aprobo(promedio) {
    return promedio >= 3.0;
}

function anosParaGraduarse(edadActual) {
    return 2026 + 4;
}

let miPromedio = calcularPromedio(misCalificaciones);

console.log("Mi promedio:", miPromedio);
console.log("¿Aprobé?", aprobo(miPromedio));
console.log("Me gradúo en:", anosParaGraduarse(miEdad));


// PARTE 3: Condicionales
function evaluarDesempeno(promedio) {
    if (promedio > 4.5) {
        console.log("¡Excelente desempeño!");
    } else if (promedio > 4.0) {
        console.log("Muy buen trabajo");
    } else if (promedio >= 3.0) {
        console.log("Aprobado");
    } else {
        console.log("Requiere mejora");
    }
}

evaluarDesempeno(miPromedio);


// PARTE 4: Bucles for
function mostrarCalificaciones(calificaciones) {
    for (let i = 0; i < calificaciones.length; i++) {
        console.log("Corte " + (i + 1) + ": " + calificaciones[i]);
    }
}

mostrarCalificaciones(misCalificaciones);


// DESAFIO EXTRA
let estudiantes = [
    { nombre: "Juan", calificaciones: [4.2, 4.5, 4.8, 4.0, 4.3] },
    { nombre: "Maria", calificaciones: [3.5, 3.8, 3.9, 3.6, 3.7] },
    { nombre: "Pedro", calificaciones: [4.7, 4.9, 4.8, 5.0, 4.6] }
];

function mostrarEstudiantesDestacados(estudiantes) {
    for (let i = 0; i < estudiantes.length; i++) {
        let promedio = calcularPromedio(estudiantes[i].calificaciones);

        if (promedio > 4.0) {
            console.log(estudiantes[i].nombre + " - Promedio: " + promedio.toFixed(2));
        }
    }
}

mostrarEstudiantesDestacados(estudiantes);


// BONUS
function contarAprobados(estudiantes) {
    let cantidad = 0;

    for (let i = 0; i < estudiantes.length; i++) {
        let promedio = calcularPromedio(estudiantes[i].calificaciones);

        if (promedio >= 3.0) {
            cantidad = cantidad + 1;
        }
    }

    return cantidad;
}

function calcularPromedioGeneral(estudiantes) {
    let sumaPromedios = 0;

    for (let i = 0; i < estudiantes.length; i++) {
        sumaPromedios = sumaPromedios + calcularPromedio(estudiantes[i].calificaciones);
    }

    return sumaPromedios / estudiantes.length;
}

function encontrarCalificacionMasAlta(estudiantes) {
    let calificacionMasAlta = 0;
    let nombreEstudiante = "";

    for (let i = 0; i < estudiantes.length; i++) {
        for (let j = 0; j < estudiantes[i].calificaciones.length; j++) {
            if (estudiantes[i].calificaciones[j] > calificacionMasAlta) {
                calificacionMasAlta = estudiantes[i].calificaciones[j];
                nombreEstudiante = estudiantes[i].nombre;
            }
        }
    }

    return nombreEstudiante + " tiene la calificacion mas alta: " + calificacionMasAlta;
}

console.log("Estudiantes aprobados:", contarAprobados(estudiantes));
console.log("Promedio general:", calcularPromedioGeneral(estudiantes).toFixed(2));
console.log(encontrarCalificacionMasAlta(estudiantes));
