import React from 'react'

const styledCont = {
    border:'2px solid black',
    padding:'20px',
    margin:'10px'
}
const Content = (props) => {
    const {activeTab,allTabs} = props;

  return (
    <div style={styledCont}>
        {allTabs[activeTab].content}
    </div>
  )
}

export default Content