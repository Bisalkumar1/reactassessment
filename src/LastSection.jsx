import React from 'react'

import LinearProgressbar from './LinearProgressbar'

const LastSection = () => {
  return (
   <>
    <div className='lastl'>
  <h6 className="fw-bold my-2">Retirement Strategy</h6>
<div className="fw-medium my-2">Employee Contribution 
<LinearProgressbar val="%"/>
</div>
<div className="fw-medium">Retirement Age  
<LinearProgressbar val="" />
</div>
<br />
<div className="fw-medium medium">Employee Contribution <span className='valuen'>8.4%</span></div>
<div className="fw-medium">Interest Rate <span className='valuen'>5%</span></div>
<button className='update'>Update</button>
<button className='Help'>View Help Docs{`>`} </button>
</div>
<div className='my-4 mx-auto khtm'>
<p>Are you considering a</p>
<h6>Housing Advance?</h6>
<span>Limited time reduced interest.</span>
<div>
<button className='Help'>Learn More {">"}</button>
</div>
</div>
   </>
  )
}

export default LastSection