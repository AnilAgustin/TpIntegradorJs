
const borrar = () => {
    document.getElementById("nombre").value = "";
    document.getElementById("apellido").value = "";
    document.getElementById("correo").value = "";
    document.getElementById("cantidad").value = "";
}

const resumen = () => {
    let cantidadTexto = document.getElementById('cantidad').value;
    let cantidad;
    let opcion = parseInt(document.getElementById('categoria').value);
    let total = 0;
    const precioTicket = 200;
    if (cantidadTexto !== '' && !isNaN(cantidadTexto)) {
        cantidad = parseInt(cantidadTexto);
    } else {
        alert('Debe ingresar una cantidad valida.');
        return;
    }
    total = (precioTicket * cantidad) - ((precioTicket * cantidad) * (opcion / 100));
    let precioTotal = document.getElementById('total');
    precioTotal.value = 'Total a Pagar: $' + total;
}