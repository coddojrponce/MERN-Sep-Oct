import React from 'react'

const List = (props) => {
    const {list,setList} = props
  return (
    <div>
        List
        {
            list.map((item,index)=>(
                <div key={index} style={{margin:'5px',backgroundColor:item.color || 'orange',height:`${item.size}px` || '100px',width:`${item.size}px` || '100px',border:'2px solid black'}}>

                </div>
            ))
        }


    </div>
  )
}

export default List