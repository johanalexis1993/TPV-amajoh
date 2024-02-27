export const agregarProducto = () => {
  let productoInput = document.querySelector('#product')
  let cantidadInput = document.querySelector('#cantidad')
  let precioInput = document.querySelector('#precio')
  let categoriaInput = document.querySelector('#categoria')
  let proveedorInput = document.querySelector('#proveedor')
  let tbody = document.querySelector('tbody')
  !productoInput.value ||
  !cantidadInput.value ||
  !precioInput.value ||
  !categoriaInput.value ||
  !proveedorInput.value
    ? alert('Por favor, complete todos los campos.')
    : null
  let newRow = tbody.insertRow()
  newRow.insertCell(0).innerHTML = productoInput.value
  newRow.insertCell(1).innerHTML = cantidadInput.value
  newRow.insertCell(2).innerHTML = precioInput.value
  newRow.insertCell(3).innerHTML = categoriaInput.value
  newRow.insertCell(4).innerHTML = proveedorInput.value
  newRow.insertCell(5).innerHTML = `
    <button class="editar">Editar</button>
    <button class="eliminar">Eliminar</button>
  `
  productoInput.value = ''
  cantidadInput.value = ''
  precioInput.value = ''
  categoriaInput.value = ''
  proveedorInput.value = ''
}
