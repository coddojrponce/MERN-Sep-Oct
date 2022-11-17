import {useEffect,useState} from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'



const Register = ({user}) => {
    const navigate = useNavigate()
    const [state,setState] = useState({})

    useEffect(()=>{
        user && navigate('/movies')
    },[user])

    const submitHandler = (e)=>{
        e.preventDefault()

        axios.post('http://localhost:8000/api/v1/register',state,{withCredentials:true})
        .then((res)=>{
            navigate('/movies')
        })
        .catch((err)=>{
            console.log(err)
        })



    }

    const changeHandler=(e)=>{
        setState({...state,[e.target.name]:e.target.value})
    }


  return (
    <div className="" >
        <h3>Register<button className = "btn hover hover-success" onClick={()=>navigate('/login')}>Login</button></h3>
        
        <form className="" onSubmit={submitHandler}>
            <div className="">
                <label htmlFor="">First Name:</label>
                <input  className="form-control" onChange={changeHandler} name="firstName" type="text" />
            </div>
            <div className="">
                <label htmlFor="">Last Name:</label>
                <input className="form-control" onChange={changeHandler} name="lastName" type="text" />
            </div>
            <div className="">
                <label htmlFor="">Email:</label>
                <input className="form-control" onChange={changeHandler} name="email" type="email" />
            </div>
            <div className="">
                <label htmlFor="">Password:</label>
                <input  className="form-control" onChange={changeHandler} name="password" type="password" />
            </div>
            <div className="">
                <label htmlFor="">Confirm Password:</label>
                <input className="form-control" onChange={changeHandler} name="confirmPassword" type="text" />
            </div>
            <div className="row">
                <button className="btn hover hover-success" type="submit">Register</button>
            </div>




        </form>


    </div>
  )
}

export default Register