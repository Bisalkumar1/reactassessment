import React from 'react'

const FirstSection = () => {
    let y=new Date().getFullYear();
let m=new Date().getMonth();
let da=new Date().getDate();

let account='XXX00011';
  return (
 <>
     <div className="imageaprt"> 
     <img src="https://picsum.photos/id/237/200/300" alt="img" className='image1'/>
    <div> <span className='textbold'>Hi Mike, </span> 
    <div>Welcome Back</div>
    
    </div>
        </div>

        <div className="mb-2"></div>
        <h6 className='mb-1'>Today</h6>

        <div>
       <h4>$196,892</h4>
       <span >Account Balance</span>
       </div>
<br />
<div>
       <h5>$4,000</h5>
       <span>Year-to-Date Contribution</span>
       </div>

<div>
<h5 className='mt-3'>$1,892</h5>
  <span>Total Interest</span>
  </div>
<br />
<select name="I want to " id="optionbutton" className='mt-1 mb-5'>
    <option value="">I Want To</option>
    <option value="">Option 1</option>
    <option value="">Option 2</option>
</select>

<h5>Recent Transactions</h5>

<div className='datehome'>
<span >{y}-{m+1}-{da}</span>
<br />
<span className='textbold textbold1'>Withdrawl Transfer to Bank {account}</span>
</div>

<div className='datehome'>
<span >{y}-{m+1}-{da-10}</span>
<br />
<span className='textbold textbold1'>Withdrawl Transfer to Bank {account}</span>
</div>

<div className='datehome'>
<span>{y}-{m+1}-{da-15}</span>
<br />
<span className='textbold textbold1 '>Withdrawl Transfer to Bank {account}</span>

</div>
 </>
  )
}

export default FirstSection