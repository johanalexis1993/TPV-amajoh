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
