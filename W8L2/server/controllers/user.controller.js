const jwt = require("jsonwebtoken");
const User = require("../models/user.model")
const bcrypt = require('bcrypt')

const UserController = {

    register: (req, res) => {
        User.create(req.body)
        .then((user) => {
            const {_id,firstName,...other} = user

            const userToken = jwt.sign({
                id:user._id
            },"supersecretkey")

            res.cookie("usertoken",userToken,{
                httpOnly:true
            }).status(201).json({user:{id:_id,name:firstName}})
 
          })
          .catch(err => res.json(err));
      },

      login:(req, res)=>{

        // console.log(process.env)
        // console.log(process.env.JWT_KEY)
        User.findOne({email:req.body.email})
        .then((user)=>{
            
            const {_id,firstName,...other} = user
            if(user === null){
                
                res.status(400)
            }
            bcrypt.compare(req.body.password,user.password)
            .then(()=>{
                const userToken = jwt.sign({
                    id:user._id,
                    firstName:user.firstName
                },"supersecretkey")

                res.cookie('usertoken',userToken,{
                    httpOnly:true
                }).json({user:{id:_id,name:firstName}})
            })
            .catch(()=>{
                
                res.status(400)
            })
        })
        .catch((err)=>{
            res.status(400).json({msg:"something went wrong",error:err})
        })
      },
      logout: (req, res) => {
        res.clearCookie('usertoken');
        res.status(200).json({user:"Logged Out"})
        },
        getAll:(req,res)=>{
            User.find({})
            .then((users)=>{
                res.json(users)
            })
            .catch((err)=>{
                console.log("error getting users")
            })
        }
    
}


module.exports = UserController



