const UserController = require('../controllers/user.controller')
const { authenticate,isLoggedIn } = require('../config/jwt.config')

const routes = (app)=>{

    
    //Create
    app.post('/api/v1/register',UserController.register)
    //Read
    app.post('/api/v1/login',UserController.login)
    
    app.get('/api/v1/logout',UserController.logout)

    app.post('/api/v1/isLoggedIn',isLoggedIn)
}


module.exports = routes