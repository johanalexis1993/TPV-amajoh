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
