import {
  toggleSidebar,
  showSection,
  agregarProducto,
  eventClientes,
  eventPromociones,
  eventEmpleados,
  guardarConfiguracionRestaurante,
  registrarVenta,
  generarReporte,
  guardarConfiguracion,
  mostrarDocumentacion,
  enviarMensaje
} from '../JavasCript/fuctions.js'
document.querySelector('#menu-toggle').onclick = toggleSidebar
document.querySelectorAll('aside a').forEach((link) => {
  link.onclick = (event) => {
    event.preventDefault()
    const sectionId = link.id.replace('enlace-', '')
    showSection(sectionId)
  }
})
document.querySelector('#inventario button').onclick = agregarProducto
document.querySelector('#clientes button').onclick = eventClientes
document.querySelector('#promocionesDescuentos button').onclick =
  eventPromociones
document.querySelector('#gestionPersonal button').onclick = eventEmpleados
document.querySelector('#configuracionRestaurante button').onclick =
  guardarConfiguracionRestaurante
document.querySelector('#caja button').onclick = registrarVenta
document.querySelector('#reportesFinancieros #button').onclick = generarReporte
document.querySelector('#configuracionTPV button').onclick =
  guardarConfiguracion
document.querySelector('#ayuda button').onclick = mostrarDocumentacion
document.querySelector('#contacto button').onclick = enviarMensaje
/*document.querySelector('#macaco').onclick = function () {
  const divs = document.querySelectorAll('div')
  const lastDiv = divs[divs.length - 1]
  if (lastDiv) {
    lastDiv.remove()
  }
}*/
