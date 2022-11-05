const Pizza = require('../models/pizza.model')


const PizzaController = {
    //create
    create:(req,res)=>{
        //Validation Logic




        Pizza.create(req.body)
        .then((result)=>{
            res.status(201).json(result)
        })
        .catch((err)=>{
            res.status(400).json({msg:"Something went Wrong",error:err})
        })
    },
    //read
    getAll:(req,res)=>{
        Pizza.find({})
        .then((result)=>{
            res.json(result)
        })
        .catch((err)=>{
            res.status(400).json({msg:"Something went Wrong",error:err})
        })
    },
    getOne:(req,res)=>{
        Pizza.findOne({_id:req.params.id})
        .then((result)=>{
            res.json(result)
        })
        .catch((err)=>{
            res.status(400).json({msg:"Something went Wrong",error:err})
        })
    },
    //update
    edit:(req,res)=>{
        Pizza.findOneAndUpdate({_id:req.params.id},req.body,{new:true,runValidators:true})
        .then((result)=>{
            res.json(result)
        })
        .catch((err)=>{
            res.status(400).json({msg:"Something went Wrong",error:err})
        })
    },
    //delete
    destroy:(req,res)=>{
        Pizza.findOneAndDelete({_id:req.params.id})
        .then((result)=>{
            res.json(result)
        })
        .catch((err)=>{
            res.status(400).json({msg:"Something went Wrong",error:err})
        })
    },
}

module.exports = PizzaController