import {useState} from 'react'

const Form = (props) => {

    const {list,setList} = props
    const [box,setBox] = useState({})

    const handleChange = (e)=>{
        setBox({...box,[e.target.name]:e.target.value})
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        setList([...list,box])
    }

  return (
    <div>
        Form
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="">Color:</label>
                <input name="color" type="text" onChange={handleChange}/>
            </div>
            <div>
                <label htmlFor="">Size:</label>
                <input name="size" type="text" onChange={handleChange}/>
            </div>
            <div>
                <button type="submit">Create Box</button>
            </div>
        
        </form>
    </div>
  )
}

export default Form