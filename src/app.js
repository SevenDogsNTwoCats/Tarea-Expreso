import fs from 'fs'
import { Factura } from './modules/Factura.js'
import { ArticulosComprados } from './modules/ArticulosComprados.js';

const data = fs.readFileSync('db.json', 'utf8');
const db = JSON.parse(data)
const Empleados = db.Empleados
const Productos = db.Productos
const Sucursales= db.Sucursales

//primera factura
let numFactura = 1
let numCajero = 0
let numSucursal= 0

const porcentajeISV = 0.15
const cajeroData = Empleados.Cajero[numCajero]

let sucursalData= Sucursales[numSucursal]
let productComprados = [Productos[0], Productos[1], Productos[2]]

let datosProductos = ArticulosComprados(productComprados, porcentajeISV) //retorna productos, subtotal e isv

Factura(numFactura, sucursalData, cajeroData, datosProductos)

//segunda factura

numFactura++
numCajero = 2
numSucursal= 1

sucursalData = Sucursales[numSucursal]
productComprados = [Productos[1], Productos[2]]

datosProductos = ArticulosComprados(productComprados, porcentajeISV)

Factura(numFactura, sucursalData, cajeroData, datosProductos)

//tercera factura

numFactura++
numCajero = 1
numSucursal= 0

sucursalData= Sucursales[numSucursal]
productComprados = [Productos[1]]

datosProductos = ArticulosComprados(productComprados, porcentajeISV)

Factura(numFactura, sucursalData, cajeroData, datosProductos)

