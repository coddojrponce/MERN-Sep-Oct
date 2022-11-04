const mongoose = require('mongoose')


mongoose.connect("mongodb://127.0.0.1/CoolDBMovie",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
 }
)
.then(()=>{
    console.log("Successfully Connected to the DB")
})
.catch((err)=>{
    console.log("Something has gone wrong connecting to the DB")

})


