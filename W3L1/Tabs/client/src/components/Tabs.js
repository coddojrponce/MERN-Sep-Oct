import React from 'react'



const Tabs = (props) => {


    const {activeTab,setActiveTab,allTabs} = props;

    const styledTabs = {
    display:'flex',
    justifyContent:'center',
    gap:'10px',

}

const tabs = {
    border:'2px solid black',
    padding:'8px',

}

const active = {

    border:'2px solid black',
    padding:'8px',
    backgroundColor:"black",
    color:'white'
}

const clickHandler = (index)=>{
    setActiveTab(index)
}

  return (
    <div style={styledTabs}>
        {
            allTabs.map((item,index)=>(
            <div key = {index} style={activeTab == index ? active:tabs} onClick={(e)=>clickHandler(index)}>
               
            {item.tabNum}
            </div>
            ))
        }
        
        
    </div>
  )
}

export default Tabs