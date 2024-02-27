export const editarElemento = (tablaId, nombreElemento) => {
  let tabla = document.querySelector(`#${tablaId}`)
  let filas = tabla.querySelectorAll('tbody tr')
  for (let i = 0; i < filas.length; i++) {
    let celdas = filas[i].querySelectorAll('td')
    let nombre = celdas[0].innerText
    if (nombre === nombreElemento) {
      for (let j = 0; j < celdas.length - 1; j++) {
        let contenidoCelda = celdas[j].innerText
        let nuevoContenido = prompt(
          `Ingrese el nuevo valor para la columna ${j + 1}:`,
          contenidoCelda
        )
        if (nuevoContenido !== null) {
          celdas[j].innerText = nuevoContenido
        }
      }
      alert(`Elemento editado: ${nombre}`)
      break
    }
  }
}
