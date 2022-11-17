const mongoose = require('mongoose')


const MovieSchema = new mongoose.Schema({
    owner:{
        type:String,
        required:[true,"Creator is required"]
    },
    title:{
        type:String,
        required:[true,"Movie Title is required"]
    },
    genre:{
        type:String,
        required:[true,"A Genre is required"],
        enum:{
            values:[
                'Comedy',
                'Drama',
                'Horror',
                'Sci-Fi',
                'Fantasy',
                'Action',
                'Family',
                'Animated',
                'Documentary',
                'Romcom',
                'Silent Movie',
                'Thriller',
                'Crime Noir',
                'French Cinema'
            ],
            message:'{VALUE} is not supported'
            
        },
        required:[true,"Genre is required"]
    },
    boxArt:{
        type:String,
        required:[true,"Image is necessary"]
    },
    duration:{
        type:String,
        default:'N/A'
    },
    rating:{
        type:String,
        enum:{
            values:['G','PG','PG-13','R','NC-17'],
            message:'{VALUE} not supported'
        },
        required:[true,"Rating is required"]
    },
    actors:{
        type:[String]
    },
    isKidFriendly:{
        type:Boolean,
        default:false
    },
    releaseYear:{
        type:Number,
        min:[1920,"Movie is too old to add"]
    }


},{timestamps:true})

const Movie = mongoose.model("Movie",MovieSchema)

module.exports = Movie