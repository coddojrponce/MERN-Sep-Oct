const express = require('express')
const app = express()
app.use(express.json())
require('dotenv').config()
const port = 8000
const cors = require('cors')
app.use(cors({
    origin:"http://localhost:3000"
}))

//config
require('./config/mongoose.config')


//routes
require('./routes/movie.routes')(app)



app.listen(port,()=>{console.log(`Locked and loaded on port ${port}`)})