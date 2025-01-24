import React from 'react'
import AllItems from "../Assets/Allitems"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import foodItems from '../Assets/Allitems';
import Slider from "react-slick";
import "../Components/FoodSlider.css"

const FoodSlider = ({handlecart}) => {
    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 720,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 495,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
    <div className='z-[0] w-[95%] mx-auto'>
      <h1 className='text-3xl font-semibold'>What's in your mind?</h1>

        <Slider {...settings} className='m-[25px] p-[20px]'>
       
          {
                AllItems.map((Items)=>{
                    return <div className='rounded-md mb-[20px]' key={Items.id}>
                    <div className='flex justify-center items-center rounded-t-xl'>
                        <img
                         src={Items.image}
                         alt="img"
                         className='w-[200px] h-[200px] rounded-full object-cover'
                         />
                    </div>
                    <div className='flex flex-col justify-center items-center gap-2 p-4'>
                        <p className='text-xl font-semibold uppercase'>{Items.name}</p>
                        <p className='text-xl font-medium'>₹{Items.price}</p>
                        <button className='bg-black text-white text-l p-2 mt-2 rounded-md hover:text-orange-500' onClick={handlecart}>
                            Add to Cart
                        </button>

                    </div>
                </div>

                   
                })
            } 
             </Slider> 
      
    </div>
  )
}

export default FoodSlider
