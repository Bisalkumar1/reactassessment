import React, { useState } from 'react'

const LinearProgressbar = (props) => {

const [data,setdata]=useState(1);
const Changefunc=(e)=>{
    setdata(e.target.value);
}
  return (
    <>
    
<div className="linearprogress">
<input className="progress mx-5 my-2" type="range" min="1" max="100" value={data} onChange={Changefunc}/>
<span className='numlinearprogress' style={{backgroundColor:"white"}}>{data}{props.val}</span>
</div>
    </>
  )
}

export default LinearProgressbar