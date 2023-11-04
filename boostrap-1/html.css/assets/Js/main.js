var totalCompra = document.getElementById('totalCompra');

var estudiante = 0.2
var trainee = 0.5
var junior = 0.85
var ticket = 200
var entradaSinDescuento = 0
var entradaConDescuento = 0

function multiplicarEntradas(cantidadEntrada, ticket) {
     entradaSinDescuento = cantidadEntrada * ticket
     return entradaSinDescuento
}

function descuento () {
    var cantidadEntrada = document.getElementById('cantidadEntrada').value;

    var categoria = document.getElementById('categoria').value;

    if (categoria == "estudiante"){
        totalCompra.innerHTML = multiplicarEntradas(cantidadEntrada, ticket) * estudiante;
    } 
    else if (categoria == "trainee"){
        totalCompra.innerHTML = multiplicarEntradas(cantidadEntrada, ticket) * trainee;
    }
    else if (categoria == "junior"){
        totalCompra.innerHTML = multiplicarEntradas(cantidadEntrada, ticket) * junior;
    }

}

function borrarCompra () {
    
    totalCompra.innerHTML = '';
}