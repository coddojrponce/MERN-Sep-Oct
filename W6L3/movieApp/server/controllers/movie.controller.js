const Movie = require('../models/movie.model')


const MovieController = {
    test:(req,res)=>{
        res.json({message:"Hello World"})
    },

//create 
    create:(req,res)=>{
        Movie.create(req.body)
        .then((movie)=>{
            res.status(201).json({movie})
        })
        .catch((err)=>{
            res.status(400).json({message:"Something went wrong",error:err})
        })
    },
//read
    getOne:(req,res)=>{
        Movie.findOne({_id:req.params.id})
        .then((movie)=>{

            res.status(200).json({movie})
        })
        .catch((err)=>{
            res.status(500).json({message:"Something went wrong",error:err})
        })

        
    },

    getAll:(req,res)=>{
        Movie.find({})
        .then((movie)=>{
            res.status(200).json({movies:movie})
        })
        .catch((err)=>{
            res.status(500).json({message:"Something went wrong",error:err})
        })    },

//update
    updateOne:(req,res)=>{
        Movie.findByIdAndUpdate({_id:req.params.id},req.body,{new:true,runValidators:true})
        .then((movie)=>{
            res.status(200).json({updatedMovie:movie})
        })
        .catch((err)=>{
            res.status(400).json({message:"Something went wrong",error:err})
        })    
    },
//delete
    deleteOne:(req,res)=>{
        Movie.findByIdAndDelete({_id:req.params.id})
        .then((movie)=>{
            res.status(200).json({deletedMovie:movie})
        })
        .catch((err)=>{
            res.status(500).json({message:"Something went wrong",error:err})
        })
    }
}

module.exports = MovieController