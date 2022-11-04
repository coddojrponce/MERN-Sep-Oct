import {useEffect,useState} from 'react'
import {useParams,useNavigate,Navigate,Link} from 'react-router-dom'
import axios from 'axios'

const View = () => {

    const {id} = useParams()
    const [pizza,setPizza] = useState({})
    const [errors,setErrors] = useState("")
    const navigate = useNavigate()
useEffect(()=>{

    axios.get(`http://localhost:8000/api/pizzas/${id}`)
    .then((response)=>{
        console.log(response.data)
        setPizza(response.data)
    })
    .catch((err)=>{
        console.error(err.response.status)
        setErrors(err)
        if(err.response.status === 400){
            navigate("/pizza/notfound")
        }

    })

},[])

const handleDelete=()=>{
    axios.delete(`http://localhost:8000/api/pizzas/${id}`)
    .then(()=>{
        navigate('/pizza')
    })
    .catch((err)=>{
        console.log(err)
    })
}

  return (
    <div>
        <navbar>
        <h2>Pizza Factory</h2>
        <Link to="/pizza"><button>Home</button></Link>
        


        </navbar>
        <div className="container">
        <h2>{pizza.name}</h2>
        <p>Crust: {pizza.crust}</p>
        <p>Sauce: {pizza.sauce}</p>
        <p>Cheese:</p> 
        
        {
        
        pizza.cheese?.map((item,index)=>(
            <p key={index}>{item.cheese}</p>
        ))
        }
        
        <p>Non-Meat Toppings:</p>
        {
            pizza.toppings1?.map((item,index)=>(
                <p key={index}>{item.topping}</p>
            ))
        }
        <p>Meat Toppings:</p>
        {
            pizza.toppings2?.map((item,index)=>(
                <p key={index}>{item.topping}</p>
            ))
        }
        
        <div className="row">
        <Link to={`/pizza/${pizza._id}/edit`}>
            <button className="success">
            Edit
            </button>
        </Link>
        
        <Link onClick ={handleDelete}>
            <button className="danger">
            Delete
            </button>
        </Link>
        </div>
        </div>
        
    </div>
  )
}

export default View