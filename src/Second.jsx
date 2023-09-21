import React from 'react'

import Secondfirst from './Secondfirst';
import Barchart from './Barchart';
import Progressbar from './Progressbar';

const Second = () => {
  return (
    <>
      <h6 style={{color:"blue"}}>Retirement Income</h6>
<h5>Starting Year 2056</h5>
<div className="mb-5"></div>

<div className="status mx-auto">
 <Secondfirst value={"$300,00"} text={"My Goal"}/>
 <Secondfirst value={"59%"} text={"Goal Achieved"}/>
 <Secondfirst value={"$300"} text={"Est. Monthly Income"}/>
</div>
<div className="mt-5 my-auto fw-bold"></div>   
<Barchart/>

<div className='secondlastpart'>
<div className='mt-3 mx-auto fw-bold'>How do I compare my peers?</div>
<p>These numbers represent current goal achievement</p>

<div className='flexkrna'>
<div className="mt-2 my-auto secondgraph">
<div className='fw-bold my-1'>Age: <select name="Age" id="Age">
  <option value="30">Under 30</option>
  <option value="60">Under 60</option>
  <option value="80">Under 80</option>
</select>
</div>

<div className='fw-bold my-1'>Salary: <select name="Salary" id="Age">
  <option value="K 20-K 30">K 20-K 30</option>
  <option value="K 30-K 60">K 30-K 60</option>
  <option value="K 60-K 80">K 60-K 80</option>
</select>
</div>

<div className='fw-bold my-1'>Salary: <select name="Gender" id="Age">
  <option value="Male">Male</option>
  <option value="Female">Female</option>
  <option value="TransGender">TransGender</option>
</select>
</div>

</div>

<div className="secondlastgraph">
<Progressbar value={78} text={"Average"}/>
<Progressbar value={95} text={"Top"}/>
<Progressbar value={59} text={"Me"}/>
</div>
</div>
</div>
    </>
  )
}

export default Second