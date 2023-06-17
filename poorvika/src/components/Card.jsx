import React from 'react';

const Card = (props) => {
  return (
    <div className='card bg-blue-50 w-[220px] h-[350px] mr-4 rounded-lg shadow-2xl'>
      <div className='top flex justify-center w-full'>
        <img className='w-[220px] h-[200px] object-cover p-2' src={props.src} alt="iphone" />
      </div>
      <div className="bottom flex flex-col justify-center items-start p-3 bg-">
        <div className="title font-semibold text-xs my-1">{props.pname}</div>
        <div className="category text-xs font-light my-1">5.14 cm (6.1-inch) Display</div>
        <div className='pricing flex items-center'>
          <div className='price'>
            <h2 className='text-green-500'><span className='i text-green-500'><i class="fa-solid fa-indian-rupee-sign mr-1"></i></span>{props.price}</h2>
          </div>

          <div className='ml-2 text-xs'>
            <i class="fa-solid fa-indian-rupee-sign"></i><del>1,89,000</del>
          </div>
        </div>
        <div className='flex items-center my-2'>
          <button className='border px-3 py-2 text-xs bg-gray-200 rounded-lg mr-1'><a href='https://poorvika.com/apple-iphone-14-pro-deep-purple-256gb/p' target='_blank'>Buy Now</a></button> 
          <button className='border px-3 py-1 text-xs bg-blue-200 rounded-lg'>Add to cart</button>
        </div>
      </div>
    </div>
  )
}
export default Card;