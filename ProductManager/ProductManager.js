import fs from 'fs'

class ProductManager {
   constructor() {
      this.path = "ProductManager.json"
      this.product = [];

   }


   addProduct = async (title, description, price, thumbnail, code, stock) => {
      
      let validateCode = this.product.find((codi) => codi.code == code);
      if (validateCode) {
         console.log("Código repetido, favor de ingresar otro");
      } else {
         
         const prod = await this.getProducts();
         
         
         let producto = {
            title: title,
            description: description,
            price: price,
            thumbnail: thumbnail,
            code: code,
            stock: stock,

            
         };

         if (prod.length === 0) {
            producto.id = 1;
        } else {
            producto.id = prod[prod.length - 1].id + 1;
        }
         prod.push(producto);

         try {
           await fs.promises.writeFile(this.path, JSON.stringify(prod, null, "\t"));
         } catch (error) {
            console.error("Error al escribir en el archivo:", error);
         }
      }
   };

   getProducts = async () => {
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
   };

   getProductById = async (id) => {


      JSON.parse(await fs.promises.readFile(this.path, "utf-8"))

      const prod = this.product.find(item => item.id === id)
      if (!prod) {
         return 'Not Found'

      } else {

         return prod
      }

   }
   updateProduct = async (id, title, description, price, thumbnail, code, stock) => {
      try {
          let producto = {
              title: title,
              description: description,
              price: price,
              thumbnail: thumbnail,
              code: code,
              stock: stock,
              id: id
          };
          const prod = await this.getProducts();
          const updatep= prod.findIndex(prod=>prod.id==id)
          if(updatep !== -1){
            prod[updatep] = producto;

            await fs.promises.writeFile(this.path, JSON.stringify(prod, null, "\t"))
          }
else{ console.log("No se ha modificado el producto")}
         }
          catch (error) {
            console.log(error)
         }
      }

   deleteProduct = async (id) => {
      try {
         const prod = await this.getProducts();
         const indexProducto = prod.findIndex(prod => prod.id == id);
         if (indexProducto !== -1) {
            const deleteP = prod.splice(indexProducto, 1)[0];
            await fs.promises.writeFile(this.path, JSON.stringify(prod, null, "\t")
            );
            console.log("El producto fue eliminado");
            return deleteP
         } else {
            return console.log("El producto que quiere eliminar no existe");
         }
      } catch (error) {
         console.log(error)

      }

   };
}

const productManager = new ProductManager()

productManager.addProduct('RTX3050', "Placa de video con RTX", 1000, "img", "01", 5)
productManager.addProduct("RTC3060", "Placa de video con RTX", 1200, "img", "02", 5)
productManager.addProduct("RTC3070", "Placa de video con RTX", 1400, "img", "03", 5)
