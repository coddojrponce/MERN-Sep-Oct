const MovieController = require('../controllers/movie.controller')
const { authenticate,isLoggedIn } = require('../config/jwt.config')

const routes = (app)=>{

    app.get('/api/v1',MovieController.test)

    //Create
    app.post('/api/v1/movies',authenticate,MovieController.create)
    //Read
    app.get('/api/v1/movies',authenticate,MovieController.getAll)
    app.get('/api/v1/movies/:id',authenticate,MovieController.getOne)
    //Update
    app.put('/api/v1/movies/:id',authenticate,MovieController.updateOne)
    //Delete
    app.delete('/api/v1/movies/:id',authenticate,MovieController.deleteOne)
}


module.exports = routes