import React from 'react'

import { NavLink } from 'react-router-dom' 

const Exit = () => {
  return (
    <>
    <div className="mt-5 m-5 mx-auto my-auto">
<h1>Return To Home</h1>

<NavLink to="/">Home</NavLink>
</div>
    </>
   
  )
}

export default Exit