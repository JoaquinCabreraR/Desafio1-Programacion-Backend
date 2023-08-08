class ProductManager{
    constructor(){
        this.eventos=[]
    }

    addProduct(nombre, descripcion, precio, img, code, stock){
        let nuevoEvento={
            nombre,
            descripcion,
            precio,
            img,
            code,
            stock
        }

        if(this.eventos.length===0){
            nuevoEvento.id=1
        }else{
            nuevoEvento.id=this.eventos.length+1
            array1[array1.length -1].id + 1
            this.eventos[this.eventos.length -1].id + 1
        }


        this.eventos.push(nuevoEvento)

    }

    getProduct(){
        return this.eventos
    }

    getProductById(idEvento){

        let indiceEvento=this.eventos.findIndex(evento=>evento.id===idEvento)

        if(indiceEvento===-1){
            console.log(`Evento ${idEvento} no encontrado.`)
            return
        }

        return this.eventos[indiceEvento]

    }

}




let array1=[
    {
        nombre: "Producto prueba",
        descripcion: "Probando producto",
        precio: 200,
        thumbnail: "Sin imagen",
        code: "ABC123",
        stock: 25
    },
]

