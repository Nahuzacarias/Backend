import fs from "fs";


const path = "ProductManager\CarritoManager.json"

export default class CarritosManager {

    addProductInCart = async (idCart, idProd) => {

        const carritos = await this.getCarritos();
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
        return carritosFiltrados;

    }


    getCarritos = async () => {


        if (fs.existsSync(path)) {

            const data = await fs.promises.readFile(path, "utf-8")
            const carritos = JSON.parse(data)
            return carritos;
        }

        else { return [] 
        }

    }
    getCarrito = async (idCart) => {

        const carritos = await this.getCarritos();
        console.log(carritos);
        const carrito = carritos.find((cart) => cart.id == idCart);
    
    }
    addCarrito = async () => {

        const carritos = await this.getCarritos()
            ;
        let carrito = {
    
            products: [],
        };
    
    
        if (carritos.length ===0){
    
    carrito.id = 1;
    
        } else{
    
    carrito.id = carritos[carritos.length - 1].id +1 ;
    
        }
    
    carritos.push(carrito);
    
    
    await fs.promises.writeFiles(path,JSON.stringify(carritos,null,"\t"));
    return carrito
    }
    getCarritoById= async (id_producto) => {

        const products = await this.getCarritos();
        
        let producto = products.find((producto)=> producto.id === id_producto)
        
        
        if(producto){
        
        return producto;
        
        
        }else{ return console.log ("no existe")
        
        
        }
        
        }
};





