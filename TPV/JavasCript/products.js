export let inventario
const actualizarTabla = (inventar) => {
  const tablaBody = document.getElementById('tablaInventario')
  const tbody = tablaBody.querySelector('tbody')
  inventar.forEach((item) => {
    const fila = document.createElement('tr')
    fila.innerHTML = `
          <td>${item.product}</td>
          <td>${item.amount}</td>
          <td>€${item.price.toFixed(2)}</td>
          <td>${item.category}</td>
          <td>${item.supplier}</td>
          <td>
            <button class="editar">Editar</button>
            <button class="eliminar">Eliminar</button>
          </td>
        `
    tbody.appendChild(fila)
  })
}
const peticion = () => {
  fetch('http://localhost:3000/products')
    .then((res) => res.json())
    .then((res) => {
      actualizarTabla(res)
      inventario = res
    })
    .catch((err) => console.log(err))
}
peticion()
