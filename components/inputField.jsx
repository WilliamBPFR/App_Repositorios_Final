'use client'

import React from 'react'
import {Input} from '@mui/base/Input'

function InputField({nombre_label}) {
  return (
    <div className='mt-3 ml-5'>
      <label className='font-poppins-100 text-2xl text-left font-black'>
        {nombre_label}
      </label>
      <div>
      <Input className='border-2 border-black/80 w-11/12 h-10 rounded-3xl drop-shadow-custom hover:border-purple-500 '
        slotProps={{
          input: {
            type: nombre_label === "Password" ? "password" : "text",
            className: 'w-full h-full rounded-3xl px-3 py-2 font-bold focus: outline-none focus:ring-2 focus: ring-sky-400 focus:border-transparent' 
          }
        }}>
      </Input>
      </div>
    </div>
  )
}

export default InputField