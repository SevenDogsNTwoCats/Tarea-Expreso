import fs from 'fs'
import { Factura } from './modules/Factura.js'
import { ArticulosComprados } from './modules/ArticulosComprados.js';

const data = fs.readFileSync('db.json', 'utf8');
const db = JSON.parse(data)
const Empleados = db.Empleados
const Productos = db.Productos

const numCajero = 0
const sucursal = 'Los Angeles'
const porcentajeISV = 0.15
const cajeroData = Empleados.Cajero[numCajero]
const productComprados = [Productos[0], Productos[1], Productos[2]]

const datosProductos = ArticulosComprados(productComprados, porcentajeISV)

Factura(sucursal, cajeroData, datosProductos)
