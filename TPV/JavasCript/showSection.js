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
showSection('inventario')
