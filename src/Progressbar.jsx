import React, {useState } from 'react'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Progressbar = (props) => {
const [percent,setpercent]=useState(props.value);
// useEffect(()=>{
//     setTimeout(()=>{
//         if(percent<100){
//             setpercent(percent+1);
//         }
//     },50);
// },[percent]);

  return (
 <>
     <div>
      <div style={{ width: 85, marginLeft: 20}}>
        <CircularProgressbar value={percent} text={`${percent}%`} />
        <p style={{textAlign:'center'}}>{props.text}</p>
      </div>
    </div>
 </>
  )
}

export default Progressbar