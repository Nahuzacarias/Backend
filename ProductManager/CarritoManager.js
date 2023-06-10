import fs from 'fs'

export class CarritoManager {
   constructor() {
      this.path = "CarritoManager.json"
      this.Carrito = [];

   }

   getCarrito = async () => {
      try {
         const data = await fs.promises.readFile(this.path, "utf-8");
         if (data) {
            const carro = JSON.parse(data);
            return carro;
         } else {
            return [];
         }
      } catch (error) {
         console.log(error);
      }
   }


 addCarrito = async () => {

   const carro = await this.getCarrito();

   let producto = {

      products:[],

   }
   if (carro.length === 0) {
      producto.id = 1;
   } else {
      producto.id = carro[carro.length - 1].id + 1;
   }
   carro.push(producto);

   try {
      await fs.promises.writeFile(this.path, JSON.stringify(carro, null, "\t"));
      return carro
   } catch (error) {
      console.error("Error al escribir en el archivo:", error);
   }
}

addProductInCart = async (idCart, idProd) => {

   const carritos = await this.getCarrito();
   const carritosFiltrados = carritos.find((cart) => cart.id == idCart);
 
 
   let productosInCart = carritosFiltrados.products;
   const productoIndex = productosInCart.findIndex((u) => u.id == idProd);
 
   if (productoIndex !== -1) {
 
       productosInCart[productoIndex].quantity =
           productosInCart[productoIndex].quantity + 1
 
 
   } else {
 
       let producto = {
 
           id: idProd,
           quantity: 1
       };
 
       productosInCart.push(producto);
       console.log(productosInCart);
 
   }
   await fs.promises.writeFile(path, JSON.stringify(carritos, null, "\t"));
   return response.json({
     status:true,
     data:carritosFiltrados,
     
   })
 
 }
};



