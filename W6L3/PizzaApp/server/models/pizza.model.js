
const mongoose = require('mongoose')


const ToppingSchema1 = new mongoose.Schema({
    topping:{
        type:String,
        required:[true,"Non Meat Topping is required"],
        enum:{
            values:[
                'Mushroom',
                'Pineapple',
                'M&Ms',
                'Peppers',
                'Onions',
                'Vegan Sausage',
                'Vegan Pepperoni',
                'Vegan Bacon'
            ],
            message:'{VALUE} is not supported'
        }
    }
})

const ToppingSchema2 = new mongoose.Schema({
    topping:{
        type:String,
        required:[true,"Topping is required"],
        enum:{
            values:[
               
                'Sardines',
                'Sausage',
                'Pepperoni',
                'Ham',
                'Bison',
                'Bacon',
                'Kangaroo'

            ],
            message:'{VALUE} is not supported'
        }
    }
})


const CheeseSchema = new mongoose.Schema({
    cheese:{
        type:String,
        required:[true,"Cheese is required"],
        enum:{
            values:[
                'Vegan Cheese',
                'Provolone',
                'Cheddar',
                'Pepper Jack',
                'Mozzarella',
                'Muenster',
                'Gorgonzola',
                'Feta',
            ],
            message:'{VALUE} is not supported'
        }

    }
})


const PizzaSchema = new mongoose.Schema({

    name:{
        type:String,
        required:[true,"Pizza Name is required"],
        minLength:[2,"Pizza Name must be at least 2 characters"]
    },

    crust:{
        type:String,
        required:[true,"Crust is required"],
        enum:{
            values:[
                'Vegan Crust',
                'Vegan Stuffed Crust',
                'Stuffed',
                'Double Dough',
                'Cracker',
                'Stuffed',
                'Garlic Parm',
                'Cinnamon Crust',
                'Hand Tossed'

            ],
            message:'{VALUE} is not supported'
        }


    },
    sauce:{
        type:String,
        required:[true,"Sauce is required"],
        enum:{
            values:[
                'Marinara',
                'Garlic Olive Oil',
                'Pesto',
                'Buffalo',
                'Hummus',
                'Alfredo'

            ],
            message:'{VALUE} is not supported'
        }
    },
    toppings1:{
        type:[ToppingSchema1],
        validate:{
            validator:function(v){
                if(v.length > 3){
                    return false
                }
            },
            message:"Only Three Non-Meat Toppings Allowed"
        },
        


    }
    ,
    toppings2:{
        type:[ToppingSchema2],
        validate:{
            validator:function(v){
                if(v.length > 3){
                    return false
                }
            },
            message:"Only Three Meat Toppings Allowed"
        }
    }
    ,
    cheese:{
        type:[CheeseSchema],
       
        validate:[
            {
            validator:function(v){
                if(v.length == 0){
                    return false
                }
            },
            message:"At least One Cheese Topping is Required"
        },
        {
            validator:function(v){
                if(v.length > 3){
                    return false
                }
            },
            message:"Only Three Cheeses Allowed"}
                ]
    }


},{timestamps:true})


const Pizza = mongoose.model("Pizza",PizzaSchema)

module.exports = Pizza

