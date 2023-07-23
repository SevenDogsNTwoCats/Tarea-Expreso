import { GeneracionCAI } from "./GeneracionCAI.js"

export const Factura = (numFactura, sucursalData, cajero, datosProductos) => {

    const productos = datosProductos.productos
    const total = parseFloat(datosProductos.total)
    const ISV = parseFloat(datosProductos.ISV)
    const totalPagar = total + ISV

    /*
    CAI:
    AAA-BBB-CC-DDDDDDDD
    
    -AAA: Establecimiento
    -BBB: Punto de emisión del Establecimiento (se genera mediante Math.random para definir si indice 0 o 1 del arreglo de puntos)
    -CC: Tipo de documento a generar
    -DDDDDDDD: Correlativo (8 digitos)
    */
    const caiFactura= GeneracionCAI(sucursalData.idEstablecimiento, sucursalData.puntosEmision[Math.floor(Math.random() * 2)], "32")

    console.log(
        `
                            EXPRESSO

    CAI: ${caiFactura}
    Factura #${numFactura}                      Sucursal ${sucursalData.nombreEstablecimiento}
    Fecha: ${Date()}

    Cajero: ${cajero.nombre}        ID: ${cajero.id}


    ${productos.map(producto => {
            return `${producto}`;
        }).join('\n    ')}
    ---------------------------------------------------
    Subtotal                                ${total}
    ISV                                  ${ISV.toFixed(2)}
    ---------------------------------------------------
    Total a Pagar                        ${totalPagar}
    
`)

}