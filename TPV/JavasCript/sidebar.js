//setTimeout(toggleSidebar,9000)
export const toggleSidebar = () => {
  let sidebar = document.querySelector('aside')
  sidebar
    ? sidebar.classList.toggle('hidden')
    : console.error("No se pudo encontrar el elemento 'aside'.")
}
