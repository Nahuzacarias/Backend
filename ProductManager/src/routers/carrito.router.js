import {Router} from 'express'
import {CarritoManager} from "../../CarritoManager.js"

const router = Router()
const carro = new CarritoManager('../../ProductManager.js')

router.post('/',async(request,response)=>{

    const carro = await carro.addCarrito();
    const id =  request.body

      return  response.send(carro)
    

})