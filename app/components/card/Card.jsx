import React from 'react'
import Image from 'next/image';

const Card = ({data}) => {

    const {title, description, id, image} = data;
  return (
    <div className='mt-8 mx-3 flex flex-col items-center justify-center p-5 bg-custom_mid_gray rounded-lg'>
        <Image 
            src={image}
            width={250}
            height={250}
            alt='card-photo'
            className='w-auto h-auto'
        />
        <div className='flex flex-col items-center justify-centermt-4 px-4'>
            <h3 className='my-3 text-2xl'>{title}</h3>
            <p className='my-3 text-sm'>{description} , ID: {id}</p>
            <button className='outline-none py-1 px-2 bg-custom_orange rounded-2xl'>More</button>
        </div>
    </div>
  )
}

export default Card