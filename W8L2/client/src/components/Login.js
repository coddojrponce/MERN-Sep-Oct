import {useEffect,useState,useContext} from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
import {UserContext} from '../context/UserContextProvider'


const Login = ({setLoggedIn}) => {
    const {state,dispatch} = useContext(UserContext);
    const [input,setInput] = useState({})
    const navigate = useNavigate()

    useEffect(()=>{
        console.log("current state")
        console.log(state)
        state.user && navigate('/movies')
    },[state.user])



    const submitHandler = (e)=>{
        console.log("submitting")
        e.preventDefault()

        axios.post('http://localhost:8000/api/v1/login',input,{withCredentials:true})
        .then((res)=>{
            console.log(res.data)
            dispatch({
                type:"SET_USER",
                payload:res.data.user
            })
            
            setLoggedIn(true)
            console.log("updated current state")
            console.log(state)
            navigate('/movies')
        })
        .catch((err)=>{
            console.log(err)
        })



    }

    const changeHandler=(e)=>{
        setInput({...input,[e.target.name]:e.target.value})
    }


  return (
    <div className="" >
        <h3>Login<button className = "btn hover hover-success" onClick={()=>navigate('/register')}>Register</button></h3>
        
        <form className="" onSubmit={submitHandler}>
            
            <div className="">
                <label htmlFor="">Email:</label>
                <input className="form-control" onChange={changeHandler} name="email" type="email" />
            </div>
            <div className="">
                <label htmlFor="">Password:</label>
                <input className="form-control" onChange={changeHandler} name="password" type="password" />
            </div>
            
            <div className="row">
                <button className="btn hover hover-success" type="submit">Login</button>
            </div>




        </form>


    </div>
  )
}

export default Login