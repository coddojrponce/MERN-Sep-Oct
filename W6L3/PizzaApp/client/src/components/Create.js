import {useState,useEffect} from "react";
import axios from 'axios'
import {useNavigate,Link} from 'react-router-dom'

const Create = () => {

const crustArray = [
    'Vegan Crust',
    'Vegan Stuffed Crust',
    'Stuffed',
    'Double Dough',
    'Cracker',
    'Stuffed',
    'Garlic Parm',
    'Cinnamon Crust',
    'Hand Tossed'
]

const sauceArray = [
                'Marinara',
                'Garlic Olive Oil',
                'Pesto',
                'Buffalo',
                'Hummus',
                'Alfredo'
]

const toppings1Array = [
                'Mushroom',
                'Pineapple',
                'M&Ms',
                'Peppers',
                'Onions',
                'Vegan Sausage',
                'Vegan Pepperoni',
                'Vegan Bacon'
]

const toppings2Array = [
    'Sardines',
    'Sausage',
    'Pepperoni',
    'Ham',
    'Bison',
    'Bacon',
    'Kangaroo'
]

const cheeseArray = [
    'Vegan Cheese',
    'Provolone',
    'Cheddar',
    'Pepper Jack',
    'Mozzarella',
    'Muenster',
    'Gorgonzola',
    'Feta',
]
    const [state,setState] = useState({})
    const [errors,setErrors] = useState([])
    const navigate = useNavigate()

    const handleChange = (e)=>{
        console.log(e.target.name)
        console.log(e.target.value)
        if(e.target.name == "cheese" && e.target.checked === true){
            if(state.cheese){
                let newList = [...state.cheese]
                newList.push({cheese:e.target.value})
                setState({...state,cheese:newList})
            }else{
                let myArray = [{cheese:e.target.value}]
                setState({...state,cheese:myArray})
            }
        }
        else if(e.target.name == "cheese" && e.target.checked === false){
            let newList = [...state.cheese]
                newList = newList.filter((item,index)=>(item.cheese !== e.target.value))
                setState({...state,cheese:newList})
        }
        else if(e.target.name == "toppings1" && e.target.checked ===true){
            if(state.toppings1){
                let newList = [...state.toppings1]
                newList.push({topping:e.target.value})
                setState({...state,toppings1:newList})
            }else{
                let myArray = [{topping:e.target.value}]
                setState({...state,toppings1:myArray})
            }
        }
        else if(e.target.name == "toppings1" && e.target.checked ===false){
            let newList = [...state.toppings1]
                newList = newList.filter((item,index)=>(item.topping !== e.target.value))
                setState((state)=>({...state,toppings1:newList}))
        }
        else if(e.target.name == "toppings2" && e.target.checked ===true){
            if(state.toppings2){
                let newList = [...state.toppings2]
                newList.push({topping:e.target.value})
                setState({...state,toppings2:newList})
            }else{
                let myArray = [{topping:e.target.value}]
                setState({...state,toppings2:myArray})
            }
        }
        else if(e.target.name == "toppings2" && e.target.checked ===false){
            let newList = [...state.toppings2]
                newList = newList.filter((item,index)=>(item.topping !== e.target.value))
                setState({...state,toppings2:newList})
        }
        else if(e.target.name === "crust" || e.target.name === "sauce" || e.target.name === "name"){
            setState({...state,[e.target.name]:e.target.value})

        }
            
    
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        
        console.log(state)
        axios.post("http://localhost:8000/api/pizzas/",state)
        .then(()=>{
            navigate('/pizza')
        })
        .catch((err)=>{
            console.log(err)
            const errorResponse = err.response.data.error.errors;
                const errorObj = {};
                for (const key of Object.keys(errorResponse)) {
                    errorObj[key] = errorResponse[key].message
                }
                setErrors(errorObj);
        })
    }

 

  return (
<div>
    <navbar>
      <h2>Pizza Factory</h2>
      <Link to="/pizza"><button>Home</button></Link>
      </navbar>
  <div className="form-control">
    <h2>Update Your Pizza !</h2>
    <form className="container" onSubmit={handleSubmit}>
      <div className="col">
          {errors.name ? <p>{errors.name}</p>:null}
        <label htmlFor="">Name:</label>
        <input type="text" name="name" onChange={handleChange} value={state.name}/>
      </div>
          <div className="col">
          {errors.crust ? <p>{errors.crust}</p>:null}

              <label htmlFor="crust">Crust:</label>
          <select onChange={handleChange} name="crust" id="crust"  value={state.crust}>
              <option value="">None</option>

              {

                  crustArray.map((item,index)=>(
                      <option key={index} value={item}>{item}</option>

                  ))
              }


          </select>
      </div>
      <div className="col">
          {errors.sauce ? <p>{errors.sauce}</p>:null}

          <label htmlFor="sauce">Sauce:</label>
          <select onChange={handleChange} name="sauce" id="sauce"  value={state.sauce}>
              <option value="">None</option>

              {

                  sauceArray.map((item,index)=>(
                      <option key={index} value={item}>{item}</option>

                  ))
              }


          </select>
      </div>
      <div className="col" >
          {errors.cheese ? <p>{errors.cheese}</p>:null}
          <label htmlFor="cheese">Cheese:</label>
          <div className="items">
          
              {
                  cheeseArray.map((item,index)=>(
                      <div  key={index} >
                      <label htmlFor="">{item}
                      <input 
                      checked={(state.cheese?.filter((i,idx)=>(i.cheese=== item)))?.length === 1 ? true :false} 

                      onChange={handleChange} name="cheese" id="" type="checkbox" value={item} />
                      </label>
                      </div>
                  ))
              }
          </div>
      </div>
      
      <div className="col">
          {errors.toppings1 ? <p>{errors.toppings1}</p>:null}

          <label htmlFor="toppings1">Non-Meat Toppings:</label>
          <div className="items">
              {

                  toppings1Array.map((item,index)=>(
                      <div key={index} >
                      <label htmlFor="">{item}
                      <input 
                      checked={(state.toppings1?.filter((i,idx)=>(i.topping === item)))?.length === 1 ? true :false} 
                      onChange={handleChange} name="toppings1" id="" type="checkbox" value={item} />
                      </label>
                      </div>
                  ))
              }
          </div>

      </div>

      <div className="col">
      {errors.toppings2 ? <p>{errors.toppings2}</p>:null}

          <label htmlFor="toppings2">Meat:</label>
              <div  className="items">
              {
                  toppings2Array.map((item,index)=>(
                      <div  key={index} >
                      <label htmlFor="">{item}
                      <input
                       checked={(state.toppings2?.filter((i,idx)=>(i.topping === item)))?.length === 1 ? true :false} 

                       onChange={handleChange} name="toppings2" id="" type="checkbox" value={item} />
                      </label>
                      </div>
                  ))
              }
              </div>

      </div>



      <button type="submit">Submit</button>
        
    </form>
  </div>
  </div>
  );

};

export default Create;
