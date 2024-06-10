import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../slices/counteSlice'



const Parent =() =>{

  const data = useSelector((state)=> state.counter.value )
  const dispath = useDispatch()

  


  return (
   <div className="one flex gap-[20px]">
    <button onClick={()=> dispath(decrement())} className='text-[30px] font-bold text-[#E178C5] border-2 border-solid border-[#FFFF80] hover:bg-red-600'>Remove</button>
      <h1 className='text-[35px] font-bold text-[#FFFAB7]'>{data}</h1>
    <button onClick={()=> dispath(increment())} className='text-[25px] font-bold text-[#E178C5] border-2 border-solid border-[#FFFF80] hover:bg-green-500'>Add</button>
   </div>
  )

}
export default Parent
