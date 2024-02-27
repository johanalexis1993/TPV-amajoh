export const eliminarElemento = (tablaId, nombreElemento) => {
  let tabla = document.querySelector(`#${tablaId}`)
  let filas = tabla.querySelectorAll('tbody tr')
  for (let i = 0; i < filas.length; i++) {
    let celdas = filas[i].querySelectorAll('td')
    let nombre = celdas[0].innerText
    if (nombre === nombreElemento) {
      let cantidadCell = celdas[1]
      let cantidad = parseInt(cantidadCell.innerText)
      if (cantidad > 0) {
        cantidad--
        cantidadCell.innerText = cantidad
        if (cantidad === 0) {
          tabla.querySelector('tbody').deleteRow(i)
        }
      }
      break
    }
  }
}
