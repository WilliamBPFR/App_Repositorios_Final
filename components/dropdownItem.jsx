'use client'

import React from 'react'
import { Select,Option} from '@mui/base'

function DropDownInput({nombre_label, tipo, name,onChange, onBlur, value,options}) {
    options=["Opción 1", "Opción 2", "Opción 3"]
  return (
    <div className='mt-2 ml-5 w-full'>
      <label className='font-poppins-700 text-2xl text-left font-black'>
        {nombre_label}
      </label>
      <div>
      <select
        className='border-2 border-black/80 w-11/12 h-10 rounded-3xl drop-shadow-custom hover:border-purple-500 justify-center text-center'
        value={value}
        onChange={onChange}
        name={name}
        inputProps={{
            className: 'w-full h-full rounded-3xl px-3 py-2 font-bold focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent',
        }}
       >
        {options.map((option,index) => (
            <option key={index} value={index} >
            {option}
          </option>
        ))}
      </select>
      </div>
    </div>
  )
}

export default DropDownInput
