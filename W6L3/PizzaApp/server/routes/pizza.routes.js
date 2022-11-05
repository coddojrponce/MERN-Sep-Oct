const PizzaController = require('../controllers/pizza.controller')

const routes = (app)=>{
    //create
    app.post("/api/pizzas",PizzaController.create)
    //read
    app.get("/api/pizzas",PizzaController.getAll)
    app.get("/api/pizzas/:id",PizzaController.getOne)
    //update
    app.put("/api/pizzas/:id",PizzaController.edit)
    //delete
    app.delete("/api/pizzas/:id",PizzaController.destroy)
}

module.exports = routes