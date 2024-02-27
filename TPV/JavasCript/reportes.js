export const ventasPorProductoYDia = {}
const obtenerCantidadVendida = (producto, monto) => {
  return monto
}
const obtenerMontoTotal = (producto, monto) => {
  return `€${monto.toFixed(2)}`
}
const obtenerVentasPorProductoYDia = () => {
  return ventasPorProductoYDia
}
export const generarReporte = () => {
  let filasVentas = obtenerVentasPorProductoYDia()
  if (Object.keys(filasVentas).length === 0) {
    alert('No hay datos de ventas para generar el informe.')
    return
  }
  const nuevaVentana = window.open(
    '',
    'Informe de Ventas',
    'width=600,height=400'
  )
  nuevaVentana.document.write(`
    <html lang="es">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Informe de Ventas</title>
      <style>
        table {
          border-collapse: collapse;
          width: 100%;
        }
        th, td {
          border: 1px solid #dddddd;
          text-align: left;
          padding: 8px;
        }
      </style>
    </head>
    <body>
      <h2>Informe de Ventas</h2>
      <table>
        <thead>
          <tr>
            <th>Producto</th>
            <th>Cantidad Vendida</th>
            <th>Monto Total</th>
          </tr>
        </thead>
        <tbody>
  `)
  for (const dia in filasVentas) {
    const ventasPorDia = filasVentas[dia]
    for (const producto in ventasPorDia) {
      const cantidadVendida = obtenerCantidadVendida(
        producto,
        ventasPorDia[producto]
      )
      const montoTotal = obtenerMontoTotal(producto, ventasPorDia[producto])
      nuevaVentana.document.write(`
          <tr>
            <td>${producto}</td>
            <td>${cantidadVendida}</td>
            <td>${montoTotal}</td>
          </tr>
      `)
    }
  }
  nuevaVentana.document.write(`
        </tbody>
      </table>
    </body>
    </html>
  `)
}
