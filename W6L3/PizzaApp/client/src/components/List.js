import {useEffect,useState} from 'react'
import axios from 'axios'
import {useNavigate,Link} from 'react-router-dom'


const List = () => {

    const [pizzas,setPizzas]=useState([])
    const [errors,setErrors]=useState("")
    const navigate = useNavigate()

useEffect(()=>{

    axios.get("http://localhost:8000/api/pizzas")
    .then((response)=>{
        console.log(response.data)
        setPizzas(response.data)
    })
    .catch((err)=>{
        console.error(err)
        setErrors(err)

    })

},[])

const handleClick = (id)=>{
    navigate(`/pizza/${id}`)
}

const handleCreate = ()=>{
    navigate('/pizza/create')
}

  return (
    <div>
        <navbar>
        <h2>Pizza's</h2>
        <button onClick={handleCreate}>Create Pizza</button>
        </navbar>
        
        <div className="container">

            {
                pizzas.map((item,index)=>(
                    <div key={index} className="card">
                        <h3>{item.name}</h3>
                        <button onClick={(e)=>handleClick(item._id)}>View Pizza</button>
                    </div>
                ))
            }

        </div>
    </div>
  )
}

export default List