import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  

  return (
    <>
      <div className='flex justify-around'>
        <div className='bg-red-500'>hello</div>
        <div className='bg-blue-500'>hello</div>
        <div className='bg-yellow-500'>hello</div>
      </div>


      <div className='grid grid-cols-6'>
        <div className='bg-red-500 col-span-4'>hello</div>
        <div className='bg-green-500'>hello</div>
        <div className='bg-blue-500'>hello</div>
        <div className='bg-yellow-500'>hello</div>
        <div className='bg-yellow-500'>hello</div>
        <div className='bg-yellow-500'>hello</div>
        <div className='bg-yellow-500'>hello</div>
        <div className='bg-yellow-500'>hello</div>
        <div className='bg-yellow-500'>hello</div>
      </div>


      <div className='grid grid-cols-6'>
        <div className='bg-red-500 col-span-6 md:col-span-2'>hello</div>
        <div className='bg-blue-500 col-span-6 md:col-span-2'>hello</div>
        <div className='bg-green-500 col-span-6 md:col-span-2'>hello</div>

      </div>
    </>
  )
}

export default App
