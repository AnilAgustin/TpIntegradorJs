const categoria = document.getElementById("categoria");
const cantidad = document.getElementById("cantidad");
const spanValor = document.getElementById("valor");
const total = document.getElementById("total");

const precioTicket = 200;

spanValor.innerHTML = precioTicket;
total.innerHTML = precioTicket;

const calcular = () => {
  const porcentajeCategoria = categoria.value;
  const cantidadTickets = cantidad.value;

  const valorTotal = ((precioTicket * porcentajeCategoria) / 100) * cantidadTickets;

  total.innerHTML = isNaN(valorTotal) ? 0 : valorTotal;
};

categoria.addEventListener("change", calcular);
cantidad.addEventListener("input", calcular);
