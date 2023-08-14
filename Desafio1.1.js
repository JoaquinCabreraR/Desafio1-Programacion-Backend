class ProductManager{
    constructor(){
        this.Products=[]
    }
    addProduct(title, description, price, thumbnail, code, stock){
        
        const productExists = this.Products.some(
            product => product.title === title && product.code === code
        );
        
        if (productExists) {
            throw new Error(`Ya existe el producto`);
        }
        
        let nuevoProducto = {
            title,
            description,
            price,
            thumbnail,
            code,
            stock
        }
        if (this.Products.length===0){
            nuevoProducto.id=1
        }
        else{
        nuevoProducto.id=this.Products.length+1
    }
        this.Products.push(nuevoProducto)
    }

    getProducts(){
        return this.Products
    }

    getProductById(id) {
        const product = this.Products.find(product => product.id === id);
        if (!product) {
            throw new Error(`No existe producto con ID ${id}.`);
        }
        return product;
    }

}

let tm = new ProductManager();
console.log(tm.getProducts());

try {
    tm.addProduct('silla', 'negra', 3000, 'No img', 123, 10);
    tm.addProduct('lampara', 'led', 5500, 'No img', 456, 7);
    tm.addProduct('tv', 'smart', 90000, 'No img', 789, 12);
    console.log(tm.getProducts());

    const product = tm.getProductById(2);
    console.log("Producto:", product);
    
    const nonExistentProduct = tm.getProductById(2); 
} catch (error) {
    console.error(error.message);
}