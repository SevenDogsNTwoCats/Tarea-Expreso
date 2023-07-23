import fs from 'fs'
import { Factura } from './modules/Factura.js'
import { ArticulosComprados } from './modules/ArticulosComprados.js';

const data = fs.readFileSync('db.json', 'utf8');
const db = JSON.parse(data)
const Empleados = db.Empleados
const Productos = db.Productos


//primera factura
let numFactura = 1
let numCajero = 0
let sucursal = 'Los Angeles'
const porcentajeISV = 0.15
const cajeroData = Empleados.Cajero[numCajero]
let productComprados = [Productos[0], Productos[1], Productos[2]]

let datosProductos = ArticulosComprados(productComprados, porcentajeISV)

Factura(numFactura, sucursal, cajeroData, datosProductos)

//segunda factura

numFactura++
numCajero = 2
sucursal = 'Los Angeles'
productComprados = [Productos[1], Productos[2]]

datosProductos = ArticulosComprados(productComprados, porcentajeISV)

Factura(numFactura, sucursal, cajeroData, datosProductos)

//tercera factura

numFactura++
numCajero = 1
sucursal = 'Miraflores'
productComprados = [Productos[1]]

datosProductos = ArticulosComprados(productComprados, porcentajeISV)

Factura(numFactura, sucursal, cajeroData, datosProductos)

