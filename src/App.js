const form = document.querySelector("#totalizador_de_venta-form");
const cantidad = document.querySelector("#cantidad-input");
const p = document.querySelector("#totalizado");

form.addEventListener("submit", (event) => {

    // Denegar la actualizacion de la pagina
    event.preventDefault();

    // Mensaje de alerta
    p.innerHTML = mostrar_cantidad(cantidad.value);
});

function Funcion(){
    location.href = "venta.html";
}

function mostrar_cantidad(cantidad){
    return "Cantidad : " + cantidad;
}