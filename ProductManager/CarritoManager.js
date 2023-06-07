import fs from 'fs'

export class ProductManager {
   constructor() {
      this.path = "CarritoManager.json"
      this.Carrito = [];

   } 

   getCarrito = async () => {
    try {
       const data = await fs.promises.readFile(this.path, "utf-8");
       if (data) {
          const prod = JSON.parse(data);
          return prod;
       } else {
          return [];
       }
    } catch (error) {
       console.log(error);
    }
 }};

 addCarrito = async () => {

       const carro = await this.getCarrito();
 

       if (carro.length === 0) {
          carro.id = 1;
       } else {
          carro.id = carro[carro.length - 1].id + 1;
       }
       prod.push(carro);

       try {
          await fs.promises.writeFile(this.path, JSON.stringify(prod, null, "\t"));
          return carro
       } catch (error) {
          console.error("Error al escribir en el archivo:", error);
       }
    }




