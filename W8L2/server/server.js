const express = require('express')
require('dotenv').config();
const app = express()
app.use(express.json())
require('dotenv').config()
const port = 8000
const cookieParser = require('cookie-parser')
const cors = require('cors')
const socket = require('socket.io')
app.use(cors(
    {
        origin: "http://localhost:3000",
        credentials:true
    }
))

app.use(cookieParser())
const Movie = require('./models/movie.model')


//config
require('./config/mongoose.config')


//routes
require('./routes/movie.routes')(app)
require('./routes/user.routes')(app)

const server = app.listen(port,()=>{console.log(`Locked and loaded on port ${port}`)})


const io = socket(server,{
    cors:{
        origin: "http://localhost:3000",
        credentials:true
    }
})

io.on("connection", socket => {
    console.log('socket id: ' + socket.id);


    socket.on("event_from_client", async () => {
        // send a message with "data" to ALL clients EXCEPT for the one that emitted the
    	//     "event_from_client" event
        console.log("running event from client function")
        const data = await Movie.find({})
        socket.emit("answer_from_server", data );
    });

    socket.on("movie_added_from_client",()=>{
        console.log('movie_added_from_client')
        io.emit("refresh_movies")
    })

    socket.on("movie_deleted_from_client",()=>{
        console.log('movie_added_from_client')
        io.emit("refresh_movies")
    })

    socket.on("movie_edited_from_client",()=>{
        console.log('movie_added_from_client')
        io.emit("refresh_movies")
    })

   
});



