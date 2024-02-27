export const formularios = (nombreInput, descuentoInput, tablaPromociones) => {
  !nombreInput.value || !descuentoInput.value
    ? alert('Por favor, complete todos los campos.')
    : null
  let tbody = tablaPromociones.getElementsByTagName('tbody')[0]
  let newRow = tbody.insertRow()
  newRow.insertCell(0).innerHTML = nombreInput.value
  newRow.insertCell(1).innerHTML = descuentoInput.value
  newRow.insertCell(2).innerHTML = `
    <button class="editar">Editar</button>
    <button class="eliminar">Eliminar</button>`
  nombreInput.value = ''
  descuentoInput.value = ''
}
export const eventClientes = () => {
  const nombreInput = document.querySelector('#nombre')
  const descuentoInput = document.querySelector('#address')
  const tablaPromociones = document.querySelector('#tablaClientes')
  formularios(nombreInput, descuentoInput, tablaPromociones)
}
export const eventPromociones = () => {
  const nombreInput = document.querySelector('#nombrePromocion')
  const descuentoInput = document.querySelector('#descuento')
  const tablaPromociones = document.querySelector('#tablaPromociones')
  formularios(nombreInput, descuentoInput, tablaPromociones)
}
export const eventEmpleados = () => {
  const nombreInput = document.querySelector('#nombreEmpleado')
  const descuentoInput = document.querySelector('#puesto')
  const tablaPromociones = document.querySelector('#tablaEmpleados')
  formularios(nombreInput, descuentoInput, tablaPromociones)
}
