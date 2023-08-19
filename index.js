//clase//
class ProductManager {
    constructor () {
        this.products =[]
    }

static id = 0

//Métodos//

addProduct(title, description, price, thumbnail, code, stock){
  for (let i=0 ; i < this.products.length; i++) {
    if (this.products[i].code === code){
      console.log (`Código ${code} repetido`);
      break;
    }
  }

  const newProduct = {title, description, price, thumbnail, code, stock}

  if  (!Object.values (newProduct).includes(undefined)) {
    ProductManager.id ++
    this.products.push({...newProduct, id: ProductManager.id})}
    
  else {
      console.log ("Campos obligatorios")
    }
  }

getProduct () {
    return this.products;
  } 

    
getProductById(id) {
    const product = this.products.find(producto => producto.id === id);
    if (!product) {
        console.log("Not found");
    } else {
        console.log(product);
    }
  }
}


const productos = new ProductManager ();

//Agregamos productos//

productos.addProduct('Reloj de pared','reloj vintage madera', 150,"photo1.png","001","100");
productos.addProduct('Lámpara','lámpara de mesa Beige 35x20cm', 180,"photo2.png","002","100");
productos.addProduct('Florero','florero de Vidrio de Cuadritos', 150,"photo3.png","003","100");

//llamamos a todos los productos //

console.log(productos.getProduct())

//Buscamos el producto por id//

productos.getProductById(3)

//verificamos el id inexistente - not found//

productos.getProductById(5)

// Verificamos que no se repita "code"

productos.addProduct ('Florero2','florero de madera', 150,"photo4.png","003","100")

//Verificamos que los campos sean obligatorios//

productos.addProduct ('Florero3',150,"photo5.png","003","100")



