import React from 'react'
import allfoods from "../Assets/Allitems"



const OurFoods = ({handlecart}) => {
  return (
    <div className='mt-[120px]'>
        <p className='text-4xl font-semibold text-center mb-5 text-orange-500'>Our Foods</p>
    <div className='grid grid-cols-2 sm:grid-cols-3  lg:grid-cols-4 grid-rows-3 gap-x-7 gap-y-8 w-[95%] mx-auto m-5 '>
      {
      allfoods.map((food)=>{
        return <div className='border-2  text-center flex justify-center items-center flex-col rounded-lg transition-all hover:scale-[1.07] ' id={food.id}>
             <div className='w-[100%] flex justify-center'>
                <img
                src={food.image}
                alt='foods'
                className='h-[200px] w-[90%] m-2 rounded-md object-cover'
                />
             </div>
             <div>
                <p className='uppercase text-2xl font-semibold text-black m-2'>{food.name}</p>
                <p className='text-xl font-medium m-2'>₹{food.price}</p>
                <button className='bg-black mx-auto text-white text-l p-2 mb-4 rounded-md font-medium hover:text-orange-500' onClick={handlecart}>
                                    Add to Cart
                                </button>
             </div>
        </div>
      })
      }
    </div>
    </div>
  )
}

export default OurFoods
