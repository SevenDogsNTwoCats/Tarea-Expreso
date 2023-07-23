export const ArticulosComprados = (productComprados, porcentajeISV)=>{
    const precios = productComprados.map((producto)=>{
        return parseFloat(producto.detalles.Precio)
    })

    const total = precios.reduce((acumulador, precio) => acumulador + precio, 0);
    const ISV = total*porcentajeISV

    const productos = productComprados.map((producto)=>{
            return `${producto.nombre} - ${producto.detalles.Tamaño}               ${producto.detalles.Precio}`               
    })

    return {
        productos,
        total,
        ISV,
    }
}