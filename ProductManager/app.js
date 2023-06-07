import express from 'express'
import productRouter from "./src/routers/products.router.js"
import carritoRouter from "./src/routers/carrito.router.js"

const app = express()
app.use(express.json())


app.use('/products', productRouter)
app.use('/api/carts', carritoRouter)

app.listen(8080,()=>console.log("Server running"))