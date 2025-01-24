import React from 'react'

const Aboutus = () => {
  return (
    <div className='w-[85%] mx-auto mb-6 mt-[120px]'>
      <div>
        <p className='text-3xl font-medium'>Driving the force of <span className='text-red-600'>assortment</span></p>

        <p className='mt-5 text-lg'>For over a decade now, we’ve been empowering our customers in discovering new tastes and experiences across countries. By putting together meticulous information for our customers, we enable them to make an informed choice</p>
      </div>

      <div className='mt-20 w-[100%]' >
        <div>
          <p className='text-5xl font-semibold'><span className='border-b-4 border-red-600'>Who</span> are we?</p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-x-10 place-items-center'>
        <div>
        <p className='text-md my-5'>Launched in 2010, Our technology platform connects customers, restaurant partners and delivery partners, serving their multiple needs. Customers use our platform to search and discover restaurants, read and write customer generated reviews and view and upload photos, order food delivery, book a table and make payments while dining-out at restaurants. On the other hand, we provide restaurant partners with industry-specific marketing tools which enable them to engage and acquire customers to grow their business while also providing a reliable and efficient last mile delivery service. We also operate a one-stop procurement solution, Hyperpure, which supplies high quality ingredients and kitchen products to restaurant partners. We also provide our delivery partners with transparent and flexible earning opportunities.</p>
        </div>

         <div className='w-[100%] '>
         <img src="https://b.zmtcdn.com/web/about/a7b0a36d5107f3590895981dab2eeac31563208212.jpeg?output-format=webp" alt="about" loading='lazy' className='w-[100%] rounded-md' />
         </div>

          
        </div>

      </div>






    </div>
  )
}

export default Aboutus
