export const showSection = (sectionId) => {
  let sections = document.querySelectorAll('section')
  let selectedSection = document.querySelector(`#${sectionId}`)
  for (const section of sections) {
    section.style.display = 'none'
    selectedSection
      ? (selectedSection.style.display = 'block')
      : console.error('La sección solicitada no existe.')
  }
}
export function toggleSidebar() {
  let sidebar = document.querySelector('aside')
  sidebar
    ? sidebar.classList.toggle('hidden')
    : console.error("No se pudo encontrar el elemento 'aside'.")
}
//setTimeout(toggleSidebar,9000)
showSection('inventario')
export const guardarConfiguracion = () => {
  let idiomaSelect = document.querySelector('#idioma')
  let monedaSelect = document.querySelector('#moneda')
  let selectedIdioma = idiomaSelect.options[idiomaSelect.selectedIndex].text
  let selectedMoneda = monedaSelect.options[monedaSelect.selectedIndex].text
  alert(
    `Configuración guardada:
      Idioma: ${selectedIdioma} 
      Moneda: ${selectedMoneda}`
  )
}
export const registrarVenta = () => {
  let montoInput = document.querySelector('#monto')
  let metodoPagoSelect = document.querySelector('#metodoPago')
  let monto = montoInput.value
  let metodoPago = metodoPagoSelect.options[metodoPagoSelect.selectedIndex].text
  !monto ? alert('Por favor, ingrese el monto de la venta.') : null
  alert(
    `Venta registrada:
     Monto: ${monto}
     Método de pago: ${metodoPago}`
  )
  montoInput.value = ''
}
export const enviarMensaje = () => {
  let nombreContactoInput = document.querySelector('#nombreContacto')
  let emailContactoInput = document.querySelector('#emailContacto')
  let mensajeContactoInput = document.querySelector('#mensajeContacto')
  let nombreContacto = nombreContactoInput.value
  let emailContacto = emailContactoInput.value
  let mensajeContacto = mensajeContactoInput.value
  !nombreContacto || !emailContacto || !mensajeContacto
    ? alert('Por favor, complete todos los campos.')
    : null
  alert(
    `Mensaje enviado:
     Nombre: ${nombreContacto}
     Email: ${emailContacto}
     Mensaje: ${mensajeContacto}`
  )
  nombreContactoInput.value = ''
  emailContactoInput.value = ''
  mensajeContactoInput.value = ''
}
/*function manejarTabla(tablaId) {
  var tabla = document.getElementById(tablaId)
  var filas = tabla.rows
  var numColumnas = filas[0].cells.length

  for (var i = 1; i < filas.length; i++) {
    var fila = filas[i]
    var nombre = fila.cells[0].innerText
    var editarBtn = fila.cells[numColumnas - 1].querySelector(
      'button[data-accion="editar"]'
    )
    var eliminarBtn = fila.cells[numColumnas - 1].querySelector(
      'button[data-accion="eliminar"]'
    )

    editarBtn.addEventListener('click', function () {
      editarCliente(nombre)
    })

    eliminarBtn.addEventListener('click', function () {
      eliminarCliente(nombre)
      fila.remove()
    })
  }
}*/
export const agregarProducto = () => {
  let productoInput = document.querySelector('#producto')
  let cantidadInput = document.querySelector('#cantidad')
  let precioInput = document.querySelector('#precio')
  let categoriaInput = document.querySelector('#categoria')
  let tablaInventario = document.querySelector('#tablaInventario')
  !productoInput.value ||
  !cantidadInput.value ||
  !precioInput.value ||
  !categoriaInput.value
    ? alert('Por favor, complete todos los campos.')
    : null
  let newRow = tablaInventario.insertRow()
  newRow.insertCell(0).innerHTML = productoInput.value
  newRow.insertCell(1).innerHTML = cantidadInput.value
  newRow.insertCell(2).innerHTML = precioInput.value
  newRow.insertCell(3).innerHTML = categoriaInput.value
  newRow.insertCell(4).innerHTML = `
    <button onclick="editarProducto('${productoInput.value}')">Editar</button>
    <button onclick="eliminarProducto('${productoInput.value}')">Eliminar</button>
  `
  productoInput.value = ''
  cantidadInput.value = ''
  precioInput.value = ''
  categoriaInput.value = ''
}
export const formularios = (nombreInput, descuentoInput, tablaPromociones) => {
  !nombreInput.value || !descuentoInput.value
    ? alert('Por favor, complete todos los campos.')
    : null
  let newRow = tablaPromociones.insertRow()
  newRow.insertCell(0).innerHTML = nombreInput.value
  newRow.insertCell(1).innerHTML = descuentoInput.value
  newRow.insertCell(2).innerHTML = `
    <button onclick="editar('${nombreInput.value},${tablaPromociones}')">Editar</button>
    <button onclick="eliminar('${nombreInput.value},${tablaPromociones}')">Eliminar</button>`
  nombreInput.value = ''
  descuentoInput.value = ''
}
export const eventClientes = () => {
  const nombreInput = document.querySelector('#nombre')
  const descuentoInput = document.querySelector('#address')
  const tablaPromociones = document.querySelector('#tabla')
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
export const generarReporte = () => {
  let tablaVentas = document
    .querySelector('#tablaInventario')
    .querySelectorAll('tbody')[0]
  let filasVentas = tablaVentas.querySelectorAll('tr')
  filasVentas.length === 0
    ? alert('No hay datos de ventas para generar el informe.')
    : null
  let informe = 'Informe de Ventas:\n\n'
  for (let i = 0; i < filasVentas.length; i++) {
    let celdas = filasVentas[i].querySelectorAll('td')
    let nombreProducto = celdas[0].innerText
    let cantidad = celdas[1].innerText
    let precio = celdas[2].innerText.replace('$', '') //esto no me funciona johan
    let categoria = celdas[3].innerText
    informe += `Producto: ${nombreProducto}\n`
    informe += `Cantidad: ${cantidad}\n`
    informe += `Precio Unitario: $${precio}\n`
    informe += `Categoría: ${categoria}\n\n`
  }
  informe += 'Otros datos relevantes:\n'
  informe += 'Total de ventas: $XXXX\n'
  informe += 'Productos más vendidos: Producto A, Producto B\n'
  // ... Agrega más información según tus necesidades
  alert(informe)
}
export const guardarConfiguracionRestaurante = () => {
  let nombreRestauranteInput = document.querySelector('#nombreRestaurante')
  let direccionInput = document.querySelector('#direccion')
  let tipoCocinaInput = document.querySelector('#tipoCocina')
  !nombreRestauranteInput.value ||
  !direccionInput.value ||
  !tipoCocinaInput.value
    ? alert('Por favor, todos los campos.')
    : null
  // Lógica para guardar la configuración del restaurante
  alert('Configuración del restaurante guardada.')
  // Limpiar los campos del formulario
  nombreRestauranteInput.value = ''
  direccionInput.value = ''
  tipoCocinaInput.value = ''
}
export function mostrarDocumentacion() {
  // Lógica para mostrar la documentación
  alert('Mostrando documentación...')
}
const agregarEfectivo = () => {
  let efectivoInput = document.getElementById('efectivo')
  let Z_y_X = document.getElementById('reportesFinancieros')

  // Validar que los campos no estén vacíos
  if (!efectivoInput.value) {
    alert('Por favor, complete todos los campos.')
    return
  }

  // Crear una nueva fila en la tabla de promociones
  let newRow = Z_y_X.insertRow()
  // Insertar celdas con los valores ingresados
  newRow.insertCell(0).innerHTML = ''
  newRow.insertCell(1).innerHTML = ''
  newRow.insertCell(2).innerHTML = `
  <button onclick="editarEmpleado('${efectivoInput.value}')">Editar</button>
  <button onclick="eliminarEmpleado('${efectivoInput.value}')">Eliminar</button>`
  // Limpiar los campos del formulario
  efectivoInput.value = ''
}
function editarProducto(producto) {
  let tablaInventario = document.querySelector('#tablaInventario')
  let rows = tablaInventario.getElementsByTagName('tr')

  for (let i = 0; i < rows.length; i++) {
    let currentRow = rows[i]
    let cells = currentRow.getElementsByTagName('td')
    let productName = cells[0].innerText

    if (productName === producto) {
      // Obtener valores actuales
      let currentCantidad = cells[1].innerText
      let currentPrecio = cells[2].innerText.slice(1) // Eliminar el signo de dólar
      let currentCategoria = cells[3].innerText

      // Mostrar los valores actuales en el formulario de edición
      let productoInput = document.getElementById('producto')
      let cantidadInput = document.getElementById('cantidad')
      let precioInput = document.getElementById('precio')
      let categoriaInput = document.getElementById('categoria')

      productoInput.value = productName
      cantidadInput.value = currentCantidad
      precioInput.value = currentPrecio
      categoriaInput.value = currentCategoria

      // Eliminar la fila actual
      tablaInventario.deleteRow(i)

      // Salir del bucle después de encontrar y editar el producto
      break
    }
  }
}
function eliminarProducto(producto) {
  let tablaInventario = document.getElementById('tablaInventario')
  let rows = tablaInventario.getElementsByTagName('tr')

  for (let i = 0; i < rows.length; i++) {
    let currentRow = rows[i]
    let cells = currentRow.getElementsByTagName('td')
    let productName = cells[0].innerText

    if (productName === producto) {
      // Confirmar la eliminación con el usuario
      let confirmacion = confirm(
        `¿Estás seguro de eliminar el producto "${producto}"?`
      )

      if (confirmacion) {
        // Eliminar la fila actual
        tablaInventario.deleteRow(i)
        alert(`Producto "${producto}" eliminado correctamente.`)
      }

      // Salir del bucle después de encontrar y eliminar el producto
      break
    }
  }
}
function editar(nombre, tabla) {
  let rows = tabla.getElementsByTagName('tr')

  for (let i = 0; i < rows.length; i++) {
    let currentRow = rows[i]
    let cells = currentRow.getElementsByTagName('td')
    let nombreActual = cells[0].innerText

    if (nombreActual === nombre) {
      let valorActual = cells[1].innerText
      let inputNombre = document.getElementById('nombreEditar')
      let inputValor = document.getElementById('valorEditar')
      inputNombre.value = nombreActual
      inputValor.value = valorActual
      tabla.deleteRow(i)
      break
    }
  }
}
function eliminar(nombre, tabla) {
  let rows = tabla.getElementsByTagName('tr')

  for (let i = 0; i < rows.length; i++) {
    let currentRow = rows[i]
    let cells = currentRow.getElementsByTagName('td')
    let nombreActual = cells[0].innerText

    if (nombreActual === nombre) {
      let confirmacion = confirm(`¿Estás seguro de eliminar "${nombreActual}"?`)

      if (confirmacion) {
        tabla.deleteRow(i)
        alert(`"${nombreActual}" eliminado correctamente.`)
      }
      break
    }
  }
}
