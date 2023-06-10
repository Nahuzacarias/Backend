import {Router} from 'express'
import {CarritoManager} from "../../CarritoManager.js"

const router = Router()
const carro = new CarritoManager('../../CarritoManager.js')

router.post('/',async(request,response)=>{

  const agregarprod = request.body
    const id = await carro.addCarrito(agregarprod)
    console.log(id)
    response.json({
      status: true,
      data: id,
    })
})

router.get('/:cid',async(request,response)=>{

  const prod = await carro.getCarrito()
  const id = request.params.cid
  const product = await prod.find(item=>item.id===id)
  console.log(id)
  return response.json({
    status:true,
    data:product,
    
  })
  
})


export default router