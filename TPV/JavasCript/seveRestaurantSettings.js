export const guardarConfiguracionRestaurante = () => {
  let nombreRestauranteInput = document.querySelector('#nombreRestaurante')
  let direccionInput = document.querySelector('#direccion')
  let tipoCocinaInput = document.querySelector('#tipoCocina')
  !nombreRestauranteInput.value ||
  !direccionInput.value ||
  !tipoCocinaInput.value
    ? alert('Por favor, todos los campos.')
    : null
  alert('Configuración del restaurante guardada.')
  nombreRestauranteInput.value = ''
  direccionInput.value = ''
  tipoCocinaInput.value = ''
}
