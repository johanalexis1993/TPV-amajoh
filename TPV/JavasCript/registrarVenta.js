//preguntar si es necesario cuando se modula tener el script en el body
import { ventasPorProductoYDia } from './reportes.js'
const actualizarVentasPorProductoYDia = (producto, monto) => {
  const diaActual = new Date().getDate()
  if (!ventasPorProductoYDia[diaActual]) {
    ventasPorProductoYDia[diaActual] = {}
  }
  if (!ventasPorProductoYDia[diaActual][producto]) {
    ventasPorProductoYDia[diaActual][producto] = 0
  }
  ventasPorProductoYDia[diaActual][producto] += parseFloat(monto)
}
const actualizarMontos = (fila, monto, metodoPago) => {
  if (!fila || isNaN(monto) || typeof metodoPago !== 'string') {
    console.error('Parámetros de entrada no válidos.')
    return
  }
  let celdaMetodoPago = fila.querySelector(`.${metodoPago.toLowerCase()}`)
  let celdaTotalTPV = fila.querySelector('.totalTPV')
  let montoAnterior = parseFloat(celdaMetodoPago.textContent.slice(1))
  let totalTPVAnterior = parseFloat(celdaTotalTPV.textContent.slice(1))
  celdaMetodoPago.textContent = `€${(montoAnterior + monto).toFixed(2)}`
  celdaTotalTPV.textContent = `€${(totalTPVAnterior + monto).toFixed(2)}`
}
export const registrarVenta = () => {
  let productoInput = document.querySelector('#caja #producto')
  let montoInput = document.querySelector('#monto')
  let metodoPagoSelect = document.querySelector('#metodoPago')
  let monto = parseFloat(montoInput.value)
  if (!productoInput.value || !montoInput.value || !metodoPagoSelect.value) {
    alert('Por favor, complete todos los campos antes de registrar la venta.')
    return
  }
  let nombreProducto = productoInput.value.trim()
  let diaActual = new Date().getDate()
  let fila = document.querySelector(
    `#reportesFinancieros tbody tr[data-dia="${diaActual}"]`
  )
  actualizarVentasPorProductoYDia(nombreProducto, monto)
  if (fila) {
    actualizarMontos(fila, monto, metodoPagoSelect.value)
  } else {
    let tbody = document.querySelector('#reportesFinancieros tbody')
    let nuevaFila = document.createElement('tr')
    nuevaFila.setAttribute('data-dia', diaActual)
    nuevaFila.innerHTML = `
      <td>${diaActual}</td>
      <td class="tarjeta">€0.00</td>
      <td class="efectivo">€0.00</td>
      <td class="maquinas">€0.00</td>
      <td class="glovo">€0.00</td>
      <td class="totalTPV">€0.00</td>
    `
    tbody.appendChild(nuevaFila)
    actualizarMontos(nuevaFila, monto, metodoPagoSelect.value)
  }
  productoInput.value = ''
  montoInput.value = ''
  metodoPagoSelect.value = ''
}
