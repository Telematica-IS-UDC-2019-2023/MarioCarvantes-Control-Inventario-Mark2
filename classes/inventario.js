export default class Inventario{

    constructor(){
        this.inicio = null  
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
            this.inicio = t.next.next
        } else{
            while(t.next.codigo != codi){
                t = t.next
            }
        }
    }
    
    BuscarPorC(codi){
        if(t.codigo === codi){
            return t.nombre
        }
        let t = this.inicio
        while(t.codigo != codi){
            t = t.next
        }
    }
    //AKA LISTAR
    RecuperarAllP(){
        let all = ""
        let t = this.inicio
        while (t != null){
            all += t.nombre + ""
            t = t.next
        }
        return all
    }
    //AKA LISTA INVERTIDA
    RecuperarInvertidoP()
    
    IndicarPosicionInsertar()
    
}

