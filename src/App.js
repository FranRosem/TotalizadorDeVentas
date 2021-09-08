const form = document.querySelector("#totalizador_de_venta-form");
const cantidad = document.querySelector("#cantidad-input");
const precio = document.querySelector("#precio-input");
const estado = document.querySelector("#estado-input");
const a = document.querySelector("#cantidad");
const b = document.querySelector("#precio");
const c = document.querySelector("#estado");
const d = document.querySelector("#descuento");
const e = document.querySelector("#impuesto");
const f = document.querySelector("#precio_venta");
const g = document.querySelector("#precio_total");

form.addEventListener("submit", (event) => {

    // Variables
    var precio_total;
    var descuento;
    var impuesto;
    var precio_venta;

    // Denegar la actualizacion de la pagina
    event.preventDefault();

    // Calcular precio total
    precio_total = calcular_precio_total(cantidad.value, precio.value);

    // Calcular el descuento basandose en el precio total
    descuento = calcular_descuento(precio_total);

    // Calcular precio total con descuento
    precio_venta = calcular_precio_total_con_descuento(precio_total, descuento);

    // Calcular el impuesto basandose en el codigo de estado
    impuesto = calcular_impuesto(estado.value, precio_venta);

    // Calcular precio de venta
    precio_total = calcular_precio_venta(precio_venta, impuesto);

    // Mensajes
    a.innerHTML = mostrar_cantidad(cantidad.value);
    b.innerHTML = mostrar_precio(precio.value);
    c.innerHTML = mostrar_estado(estado.value);
    d.innerHTML = mostrar_descuento(descuento);
    e.innerHTML = mostrar_impuesto(impuesto);
    f.innerHTML = mostrar_precio_venta(precio_venta);
    g.innerHTML = mostrar_precio_total(precio_total);
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

function mostrar_descuento(descuento){
    return "El descuento es de : " + descuento + " $";
}

function mostrar_precio_venta(precio){
    return "El precio de venta es de : " + precio + " $";
}

function mostrar_impuesto(impuesto){
    return "El impuesto es de : " + impuesto + " $";
}

function mostrar_precio_total(precio){
    return "Precio total : " + precio + " $";
}


function calcular_precio_total(cantidad, precio){
    return cantidad * precio;
}


function calcular_descuento(precio){

    if(precio >= 30000){
        return 0.15 * precio;
    }

    if(precio >= 10000){
        return 0.1 * precio;
    }

    if(precio_total >= 7000){
        return 0.07 * precio;
    }

    if(precio >= 3000){
        return 0.05 * precio;
    }

    if(precio >= 1000){
        return 0.03 * precio;
    }

    if(precio < 1000){
        return 0;
    }
}

function calcular_precio_total_con_descuento(precio, descuento){
    return precio - descuento;
}

function calcular_impuesto(estado, precio){

    if(estado == "UT"){
        return 0.0665 * precio;
    }

    if(estado == "NV"){
        return 0.08 * precio;
    }

    if(estado == "TX"){
        return 0.0625 * precio;
    }

    if(estado == "AL"){
        return 0.04 * precio;
    }

    if(estado == "CA"){
        return 0.0825 * precio;
    }
  
}

function calcular_precio_venta(precio, impuesto){
    return precio + impuesto;
}