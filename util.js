document.addEventListener("DOMContentLoaded", function () {

    console.log("El documento se ha cargado correctamente")
})

//let : local, se puede modificar
let nombre = "Juan";

//var : global
var apellido = "Perez";

//const : local, no se puede modificar
const edad = 25;

let texto = 'Esto es un texto';
let booleanos = true;
let numeros = 123456; 
let arreglo = [];
let objeto = {
    nombre: "Juan",
    apellido: "Perez",
    edad: 25
};

function nombreFuncion(parametro1, parametro2){

    return

}

function saludar(nombre = "Mundo") {
    console.log("Hola" + nombre + "!")
}

saludar("Juan");

let numero = 10;
let numero2 = 20;

console.log(numero + numero2); //suma
console.log(numero - numero2); //resta
console.log(numero * numero2); //multiplicacion
console.log(numero / numero2); //division
console.log(numero % numero2); //modulo
console.log(numero ** numero2); //potencia


//Operadores logicos

console.log(numero > numero2); // 10 < 20 -> true
console.log(numero < numero2); // 10 > 20 -> false
console.log(numero >= numero2); // 10 <= 20 -> true
console.log(numero <= numero2); // 10 >= 20 -> false
console.log(numero == numero2); // 10 = 20 -> false
console.log(numero === numero2); // 10 === 20 -> false (tipo de dato y valor)
console.log(numero != numero2); // 10 = 20 -> true
console.log(numero !== numero2); // 10 = 20 -> true (tipo de dato y valor)

console.log (edad > 18 && edad  <50); // AND (&&) se deben cumplir ambas
console.log(edad < 18 || edad  >50); // OR (|) minimo una se debe cumplir
console.log(!edad > 18); // NOT (!) (no tenga)


let campo = ""
let numero3 = 15;

if (numero3 < 10){
    console.log("Verdadero");
} else {
    console.log("Falso");
}

//while: mientras, se repite mientras sea verdadero

let contador = 0;
while (contador < 5) {
    console.log("frontend");
    contador = contador + 1;
}

//for: para repetir un bloque de codigo un numero determinado de veces

for (let i = 0; i < 5; i++) {
    console.log("Desarrollo Web");
}

let multiplicador = 9;

for (let i = 0; i < 10; i++) {
    console.log(i + " x " + multiplicador + " = " + (i * multiplicador));
}

//concatenar

let nombre4 = "Juan";
let apellido4 = "Perez";

console.log("Hola " + nombre4 + " " + apellido4); // Hola Juan Perez
console.log(`Hola ${nombre4} ${apellido4}`); // Hola Juan Perez
console.log(nombre4 , apellido4); // Juan Perez

