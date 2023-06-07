import {Router} from 'express'
import {CarritoManager} from "../../CarritoManager.js"

const router = Router()
const prod = new CarritoManager('../../ProductManager.js')

router.get('/carts',async(request,response)=>{

    const prod2 = await prod.getProducts();
    const id =  request.params.pid
    const product = await prod2.find(product=>product.id==id)
    
    if(!product){
    response.send({error: 'el ID solicitado no existe'})
    }else{

        response.send(product)
    }

})