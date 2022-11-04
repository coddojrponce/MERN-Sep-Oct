import React from 'react'

export const List = (props) => {
    const {list,setList} = props

    const handleDelete=(index)=>{
        const newList = list.filter((item,idx)=>(idx !== index))
        setList(newList)
    }

    const handleToggle=(index)=>{
        const mutList = [...list]
        mutList[index].complete = !mutList[index].complete
        setList(mutList)
    }

    const todoComplete = {
        textDecoration:'line-through'
    }


  return (
    <div>
        List
        

            {
                list.map((item,idx)=>(
            <div key={idx}>
            <input type="checkbox" onClick={()=>handleToggle(idx)} checked={item.complete} />
            <p style={item.complete ? todoComplete: null}>{item.todo}</p>
            <button  disabled = {!item.complete} onClick={()=>{handleDelete(idx)}}>Delete</button>
            </div>
                ))
            }
            
    </div>
  )
}
