export const Factura = (numFactura, sucursal, cajero, datosProductos) => {

    const productos = datosProductos.productos
    const total = parseFloat(datosProductos.total)
    const ISV = parseFloat(datosProductos.ISV)
    const totalPagar = total + ISV

    console.log(
        `
                            EXPRESSO

    Factura #${numFactura}                      Sucursal ${sucursal}
    Fecha: ${Date()}

    Cajero: ${cajero.nombre}        ID: ${cajero.id}


    ${productos.map(producto => {
            return `${producto}`;
        }).join('\n    ')}
    ---------------------------------------------------
    Total                                ${total}
    ISV                                  ${ISV.toFixed(2)}
    ---------------------------------------------------
    Total a Pagar                        ${totalPagar}
    
`)

}