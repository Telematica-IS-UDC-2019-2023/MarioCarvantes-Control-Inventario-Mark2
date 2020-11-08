import Inventario from "./js/inventario.js"
import Producto from "./js/productos.js"

var nombreP = document.querySelector("#nombreP")
var CodiP = document.querySelector("#CodiP")
var DescripcionP = document.querySelector("#DescripcionP")
var CantidadP = document.querySelector("#CantidadP")
var CostoP = docuemnt.querySelector("#CostoP")
var Insertar = document.querySelector("#Insertar")

var btnAgregarP = document.querySelector("#btnAgregarP")
var btnEliminar = document.querySelector("#btnEliminar")
var btnInicioAgregar = docment.querySelector("#btnInicioAgregar")
var btnEliminarInico = document.querySelector("#btnEliminarInicio")
var btnBuscar = document.querySelector("#btnBuscar")
var btnListar = document.querySelector("#btnListar")
var btnListarInvertida = document.querySelector("#btnListarInvertida")
var btnInsertar = document.querySelector("#btnInsertar")

var Inventario = new Inventario

btnAgregarP.addEventListener("click", ()=> {
    let producto = new Producto (CodiP.value, nombreP.value, DescripcionP.value, Number(CantidadP.value),Number(CostoP.value))

    console.log(inventario)
})

btnEliminar.addEventListener("click", )