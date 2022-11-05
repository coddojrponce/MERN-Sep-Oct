const mongoose = require('mongoose')
const DB = "MySuperSuperSuperCoolAwesomeDB"

mongoose.connect(`mongodb://127.0.0.1/${DB}`)
.then(()=>{
    console.log(`Successfully connected to DB: ${DB}`)
})
.catch((err)=>{
    console.log(`unSuccessfully connected to DB: Error:${err}`)

})