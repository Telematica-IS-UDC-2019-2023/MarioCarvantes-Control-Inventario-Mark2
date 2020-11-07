export default class Inventario{

    constructor(){
        this.inicio = null  
    }
}

AgregarNuevoP(nuevo){
    if(this.inicio === null){
        this.inicio = nuevo
    }else{
        let t = this.inicio
        while(t.next != null){
            t.next = nuevo
        }
    }
}

EliminarPorC(codi){
    let t = this.inicio
    if(codi === inicio){
        this.inico = t.next.next
    } else{
        while(t.next.codigo != codi){
            t = t.next
        }
    }
}


BuscarPorC()
RecuperarAllP()
RecuperarInvertidoP()
IndicarPosicionInsertar()
