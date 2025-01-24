import React, {useState } from 'react'

const SignIn = () => {
    const data={
        fullname:"",
        mobile:"",
        email:"",
        password:""
    }

    const [user,setusername]=useState(data);

    const [error,seterror]=useState({});

    const [flag,setflag]=useState(true);

    const handlechange=(e)=>{
        setusername({...user, [e.target.name]:e.target.value})
    }
    const handlesubmit=(e)=>{
        e.preventDefault();
        const newError={};
        let isvalid=true;
        if(user.fullname===""){
            newError.fullname="Please enter Fullname";
            isvalid=false;
        }


        if(user.email===""){
            newError.email="Please enter your email";
            isvalid=false;
        }
        else if(user.email.indexOf('@')===0){
            newError.email="Invalid index of @";
            isvalid=false;
        }
        
        if(user.mobile===""){
            newError.mobile="Please enter your mobile number";
            isvalid=false;
        }
        else if(isNaN(user.mobile)){
            newError.mobile="Mobile number should be in digits";
            isvalid=false;
        }
        else if(user.mobile.length!==10){
            newError.mobile="Length of mobile number should be in 10 digits";
            isvalid=false;
        }


        if(user.password===""){
            newError.password="Please enter your password";
            isvalid=false;
        }
        else if(user.password<5){
            newError.password="Length of password must be greater than 5";
            isvalid=false;
        }

        seterror(newError);
        setflag(isvalid);
    }
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 my-[120px] w-[90%] mx-auto gap-x-[20px] gap-y-[20px]'>
        <div className='flex flex-col justify-center items-center p-2'>
            <p className='text-[40px]'>Get started with your account</p>
            <p className='text-gray-600 font-medium'>Find your favourite food on our platform. Just one step to order your food</p>
        </div>   

        <div className='bg-gray-100 p-5 rounded-md'>
        <p className='text-2xl font-semibold'>Sign Up</p>
        <form className='flex flex-col w-[70%] p-5 gap-5' onSubmit={handlesubmit}>
          <div className='flex flex-col gap-2 w-[100%]'>
            <label htmlFor="fname" className='text-gray-600 text-xl font-semibold'>Full name</label>
            <input 
              type="text" 
              name='fullname' 
              id='fname' 
              value={user.fullname}
              onChange={handlechange}
              className='w-[95%] h-[5vh] rounded-lg text-gray-600 font-medium'
            />
            <span className='text-red-600'>{error.fullname}</span>
          </div>

          <div className='flex flex-col gap-2'>
            <label htmlFor="email" className='text-gray-600 text-xl font-semibold'>Email</label>
            <input 
              type="text" 
              name='email' 
              id='email'
              value={user.email} 
              onChange={handlechange}
              className='w-[90%] h-[5vh] rounded-lg text-gray-600 font-medium'
            />
             <span className='text-red-600'>{error.email}</span>
            
          </div>

          <div className='flex flex-col gap-2'>
            <label htmlFor="mobile" className='text-gray-600 text-xl font-semibold'>Mobile</label>
            <input 
              type="text" 
              name='mobile' 
              id='mobile' 
              value={user.mobile}
              onChange={handlechange}
              className='w-[90%] h-[5vh] rounded-lg text-gray-600 font-medium'
            />
             <span className='text-red-600'>{error.mobile}</span>
         
          </div>

          <div className='flex flex-col gap-2'>
            <label htmlFor="password" className='text-gray-600 text-xl font-semibold'>Password</label>
            <input 
              type="text" 
              name='password' 
              id='password' 
              value={user.password}
              onChange={handlechange}
              className='w-[90%] h-[5vh] rounded-lg text-gray-600 font-medium'
            />
             <span className='text-red-600'>{error.password}</span>
          </div>

          <button type="submit" className='bg-blue-500 text-white font-semibold py-2 px-4 rounded mx-auto'>
            Sign Up
          </button>
        </form>
      </div>  
    </div>
  )
}

export default SignIn
