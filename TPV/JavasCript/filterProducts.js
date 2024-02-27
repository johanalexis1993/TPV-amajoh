import { inventario } from './products.js'
export const updateProductOptions = (searchTerm) => {
  const select = document.querySelector('#productSelect')
  select.innerHTML = ''
  const filteredProducts = inventario.filter((producto) => {
    return producto.product.toLowerCase().includes(searchTerm.toLowerCase())
  })
  filteredProducts.forEach((producto) => {
    const option = document.createElement('option')
    option.value = producto.product
    option.text = `${producto.product} - ${producto.price}`
    select.appendChild(option)
  })
}
