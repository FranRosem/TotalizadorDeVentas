const form = document.querySelector("#totalizador_de_venta-form");
const cantidad = document.querySelector("#cantidad-input");
const precio = document.querySelector("#precio-input");
const estado = document.querySelector("#estado-input");
const a = document.querySelector("#cantidad");
const b = document.querySelector("#precio");
const c = document.querySelector("#estado");
const d = document.querySelector("#precio_total");

form.addEventListener("submit", (event) => {

    // Variables
    var precio_total;
    
    // Denegar la actualizacion de la pagina
    event.preventDefault();

    // Calcular precio total
    precio_total = calcular_precio_total(cantidad.value, precio.value);

    // Mensajes
    a.innerHTML = mostrar_cantidad(cantidad.value);
    b.innerHTML = mostrar_precio(precio.value);
    c.innerHTML = mostrar_estado(estado.value);
    d.innerHTML = mostrar_precio_total(precio_total);
});

function mostrar_cantidad(cantidad){
    return "La cantidad de items es : " + cantidad;
}

function mostrar_precio(precio){
    return "El precio del item es : " + precio + " $";
}

function mostrar_estado(estado){
    return "El codigo de estado es : " + estado;
}

function mostrar_precio_total(precio_total){
    return "El precio total es de : " + precio_total + " $";
}

function calcular_precio_total(cantidad, precio){
    return cantidad * precio;
}