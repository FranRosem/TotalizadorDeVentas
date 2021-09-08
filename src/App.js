const form = document.querySelector("#totalizador_de_venta-form");
const cantidad = document.querySelector("#cantidad-input");
const precio = document.querySelector("#precio-input");
const a = document.querySelector("#cantidad");
const b = document.querySelector("#precio");

form.addEventListener("submit", (event) => {

    // Denegar la actualizacion de la pagina
    event.preventDefault();

    // Mensaje de alerta
    a.innerHTML = mostrar_cantidad(cantidad.value);
    b.innerHTML = mostrar_precio(precio.value);
});

function mostrar_cantidad(cantidad){
    return "La cantidad de items es : " + cantidad;
}

function mostrar_precio(precio){
    return "El precio del item es : " + precio + " $";
}