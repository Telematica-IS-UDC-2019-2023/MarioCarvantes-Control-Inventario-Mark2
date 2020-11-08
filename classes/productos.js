export default class Productos { 
    constructor(codigo,nombre,descripcion,cantidad,costo){
        this.codigo = codigo
        this.nombre = nombre
        this.descripcion = descripcion
        this.cantidad = cantidad
        this.costo = costo
        this.next = null
    }   
}