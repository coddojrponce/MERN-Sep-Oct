const express = require('express')
const app = express()
const port = 8000
const cors = require('cors')

app.use(express.json())
app.use(cors({
    origin: 'http://localhost:3000',
}))

//config
require('./config/mongoose.config')


//routes
const routes = require('./routes/pizza.routes')
routes(app)

app.listen(port,()=>{
    console.log(`Locked and loaded on port: ${port}`)
})