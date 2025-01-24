import React, { useEffect, useState } from 'react'
const Hero = () => {
    const [slider,setslider]=useState(0);
    const foods=[
        {
         url:"https://images.unsplash.com/photo-1512152272829-e3139592d56f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            url:"https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
           url:"https://cdn.pixabay.com/photo/2020/03/07/17/30/cake-4910417_1280.jpg"
        },
        {
            url:"https://images.pexels.com/photos/2347311/pexels-photo-2347311.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            url:"https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }
    ]
    const handleplus=()=>{
        setslider(slider===foods.length-1?0:slider+1);
    }
    const handleminus=()=>{
        setslider(slider===0?foods.length-1:slider-1);
    }

    useEffect(()=>{
     let interval= setInterval(()=>{
       handleplus();
        },2000)

        return()=>clearInterval(interval);
    },[slider])

  return (
    <div>
        {
            foods.map((food,i)=>{
                return (
                    <div key={i} className={`${i==slider?"block":"hidden"} mx-5 `}>
                       <div className='h-[100%] w-[100%]'>
                       <img src={food.url} alt='foods' className='h-[75%] w-[90%] mx-auto my-4 bg-cover rounded-lg  '/>
                       </div>
                    </div>
                )
            })
        }      
        
      
    </div>
  )
}

export default Hero
