class ProductManager {
   constructor() {
      this.counter=1
      this.product = [];
   }

   addProduct = (title, description, price, thumbnail,code,stock) => {

     let validatecode = this.product.find((codi)=>codi.code==code)
let id
if(validatecode)

{
   console.log("Código repetido,favor de ingresar otro")

     
   }else{
      const id = this.counter++

      let Producto = {
      title: title,
      description: description,
      price: price,
      thumbnail: thumbnail,
      code:code,
      stock:stock,
      id:id,
   };
  
   this.product.push(Producto)}
};

   getProducts = () => {
      return (

         this.product
      )
   }
getProductById= (id) =>{

   const prod = this.product.find(item => item.id === id)
   if (!prod) return 'Not Found'
   return prod
}
   
}

const productManager = new ProductManager ()

productManager.addProduct('RTX3050',"Placa de video con RTX",1000,"img","01",5)
productManager.addProduct("RTC3060","Placa de video con RTX",1200,"img","02",5)
productManager.addProduct("RTC3070","Placa de video con RTX",1400,"img","03",5)

console.log(productManager.product);
