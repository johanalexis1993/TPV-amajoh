import { toggleSidebar } from './sidebar.js'
import { showSection } from './showSection.js'
import { agregarProducto } from './agregarProducto.js'
import { guardarConfiguracion } from './guardarConfiguracion.js'
import { registrarVenta } from './registrarVenta.js'
import { generarReporte } from './reportes.js'
import {
  eventClientes,
  eventPromociones,
  eventEmpleados
} from './formularios.js'
import { eliminarElemento } from './deleteProduct.js'
import { editarElemento } from './editProduct.js'
import { guardarConfiguracionRestaurante } from './seveRestaurantSettings.js'
import { mostrarDocumentacion } from './mostrarDocumentacion.js'
import { enviarMensaje } from './enviarMensajes.js'
import { updateProductOptions } from './filterProducts.js'
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
const agregarEventoTabla = (idTabla) => {
  document.querySelector(`#${idTabla}`).addEventListener('click', (event) => {
    let target = event.target
    let tipoAccion = target.classList.contains('eliminar')
      ? 'eliminar'
      : target.classList.contains('editar')
      ? 'editar'
      : null
    if (tipoAccion) {
      let nombreElemento = target
        .closest('tr')
        .querySelector('td:first-child').innerText
      Promise.resolve().then(() => {
        tipoAccion === 'eliminar'
          ? eliminarElemento(idTabla, nombreElemento)
          : editarElemento(idTabla, nombreElemento)
      })
    }
  })
}
agregarEventoTabla('tablaClientes')
agregarEventoTabla('tablaInventario')
agregarEventoTabla('tablaPromociones')
agregarEventoTabla('tablaEmpleados')
document
  .querySelector('#caja #producto')
  .addEventListener('input', (event) =>
    updateProductOptions(event.target.value)
  )
document
  .querySelector('#caja #productSelect')
  .addEventListener(
    'change',
    (event) =>
      (document.querySelector('#caja #producto').value = event.target.value)
  )
