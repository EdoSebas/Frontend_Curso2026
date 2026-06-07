
// Espera a que cargue el HTML antes de ejecutar JavaScript.
document.addEventListener("DOMContentLoaded", function () {

    // getElementById selecciona un elemento usando su id.
    const titulo = document.getElementById("tituloPrincipal");
    const botonSaludar = document.getElementById("botonSaludar");
    const botonCambiarTitulo = document.getElementById("botonCambiarTitulo");

    console.log("Titulo seleccionado:");
    console.log(titulo);

    // alert muestra un mensaje emergente.
    botonSaludar.addEventListener("click", function () {
        alert("Hola mundo!");
    });

    // textContent cambia el texto de una etiqueta.
    botonCambiarTitulo.addEventListener("click", function () {
        titulo.textContent = "Titulo cambiado con JavaScript";
    });


    // querySelector selecciona el primer elemento que coincida.
    const primerParrafo = document.querySelector(".parrafo");
    const listaTemas = document.querySelector("#listaTemas");

    console.log("Primer parrafo con clase parrafo:");
    console.log(primerParrafo);

    console.log("Lista de temas:");
    console.log(listaTemas);


    // querySelectorAll selecciona varios elementos.
    const parrafos = document.querySelectorAll(".parrafo");
    const temas = document.querySelectorAll("#listaTemas li");
    const tarjetas = document.querySelectorAll(".tarjeta");

    console.log("Todos los parrafos:");
    console.log(parrafos);

    // forEach recorre elemento por elemento.
    temas.forEach(function (tema) {
        console.log(tema.textContent);
    });

    tarjetas.forEach(function (tarjeta) {
        tarjeta.style.border = "1px solid black";
        tarjeta.style.padding = "10px";
        tarjeta.style.margin = "10px 0";
    });


    // value obtiene lo que el usuario escribe en un input.
    const inputNombre = document.querySelector("#nombreUsuario");
    const botonMostrarNombre = document.querySelector("#botonMostrarNombre");

    botonMostrarNombre.addEventListener("click", function () {
        console.log("Nombre escrito:", inputNombre.value);
        alert("Hola " + inputNombre.value);
    });





    //  ACTIVIDAD: DOM***

    // Seleccionar por id.
    const miDiv = document.getElementById("miId");
    console.log(miDiv);

    // querySelector por etiqueta, clase e id.
    const primerP = document.querySelector("p");
    const porClase = document.querySelector(".miClase");
    const porId = document.querySelector("#miId");

    console.log(primerP);
    console.log(porClase);
    console.log(porId);

    // querySelectorAll selecciona los li de la lista de la actividad.
    const todosLosItems = document.querySelectorAll("#listaActividad li");

    todosLosItems.forEach(function (item) {
        console.log(item.textContent);
    });

    // textContent cambia solo texto.
    const botonTexto = document.getElementById("botonTexto");

    botonTexto.addEventListener("click", function () {
        miDiv.textContent = "Texto cambiado con textContent.";
    });

    // innerHTML permite agregar etiquetas HTML.
    const botonHtml = document.getElementById("botonHtml");

    botonHtml.addEventListener("click", function () {
        miDiv.innerHTML = "<strong>Texto cambiado con innerHTML.</strong>";
    });

    // getAttribute lee un atributo y setAttribute lo cambia.
    const enlace = document.getElementById("enlace");
    const botonAtributo = document.getElementById("botonAtributo");

    console.log(enlace.getAttribute("href"));

    botonAtributo.addEventListener("click", function () {
        enlace.textContent = "Ir a Google";
        enlace.setAttribute("href", "https://www.google.com/");
    });

    // classList.toggle agrega o quita una clase.
    const botonClase = document.getElementById("botonClase");

    botonClase.addEventListener("click", function () {
        enlace.classList.toggle("resaltado");
    });

    // childNodes muestra los nodos hijos.
    const botonNodos = document.getElementById("botonNodos");

    botonNodos.addEventListener("click", function () {
        console.log(miDiv.childNodes);
    });
});
