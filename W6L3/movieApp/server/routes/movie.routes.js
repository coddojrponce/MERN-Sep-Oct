const MovieController = require('../controllers/movie.controller')

const routes = (app)=>{

    app.get('/api/v1',MovieController.test)

    //Create
    app.post('/api/v1/movies',MovieController.create)
    //Read
    app.get('/api/v1/movies',MovieController.getAll)
    app.get('/api/v1/movies/:id',MovieController.getOne)
    //Update
    app.put('/api/v1/movies/:id',MovieController.updateOne)
    //Delete
    app.delete('/api/v1/movies/:id',MovieController.deleteOne)
}


module.exports = routes