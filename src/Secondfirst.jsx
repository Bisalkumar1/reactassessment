import React from 'react'

const Secondfirst = (props) => {
  return (
    <>
         <div className="mx-4" style={{borderBottom:"2px solid rgb(125, 14, 230)"}}>
    <h3>{props.value}</h3>
    <span>{props.text}</span>
  </div>

    </>
  )
}

export default Secondfirst