'use client'
import { useState } from 'react';

import React from 'react'

const Form = () => {
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const handleSubmit =  (e) => {
        e.preventDefault()

        const data = {
            sentBy: email,
            message: message,
            date: Date.now()
        }

        console.log(data)
        setEmail('')
        setMessage('')
    }
  return (
    <div className='flex justify-center items-center w-full mt-8'>
        <form className='flex flex-col justify-center md:w-1/2' onSubmit={handleSubmit}>
            <label>Email</label>
            <input 
                type="email" 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className='outline-none rounded-xl py-1 px-3 mt-2 bg-custom_light_gray'
            />
            <label className='mt-2'>Message</label>
            <textarea 
                cols="30" 
                rows="10" 
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className='outline-none rounded-xl py-1 px-3 mt-2 bg-custom_light_gray resize-none'
            ></textarea>
            <button className='mt-4 border border-custom_orange rounded-xl py-1 w-1/2'>Send</button>
        </form>
    </div>
  )
}

export default Form