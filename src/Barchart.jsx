import React from 'react'
import Chart from "react-apexcharts";

const Barchart = () => {
 
  return (
    <>
    
    <div className='row container-fluid my-1'>
    
<Chart  
              type="bar"
              width={500}
              height={250}
              series={[
                {
         name:"Employer: K 73,500",
           data:[20,20,15,20,25,30,40,50,60,70,80,90,95],
          color:"rgb(1, 1, 124)"

                },
                {
         name:"Employee: K 52,500",
           data:[40,35,40,45,50,60,70,75,80,90,95,100,105],
           color:"rgb(127, 46, 202)"
                },
                {
         name:"Total Interest: K 244,313",
           data:[35,35,36,38,40,45,50,55,60,65,70,75,80],
           color:"rgb(78, 179, 218)",
      
                }

              ]}
              options={{
title:{
    text:"Contribution Overtime",
    style:{
            fontSize:"17",
            color:"black"
        }
},
chart:{
    stacked:true,
},
stroke:{
width:1,
// height:1,
},
xaxis:{
    title:{
        text:"",
    },
    categories:["20","",'25',"",'30',"",'35',"","40","","60","","65"]
},
yaxis:{
    title:{
        text:"",
    },
    categories:["$0",'$100','$200','$300']
   
},
legend:{
    position:"top",
},
dataLabels:{
enabled:true,
},
grid:{
    show:true,
}


              }}
            />
    </div>
    </>
  )
}

export default Barchart