'use client'

import React from 'react'
import {Input} from '@mui/base/Input'

function InputField({nombre_label, tipo, name,onChange, onBlur, value,error, showerror=false}) {
  return (
    <div className='mt-2 ml-5 w-full'>
      <div>
        <label className='font-poppins-700 text-2xl text-left font-black'>
          {nombre_label}
        </label>
        {showerror && (
          <>
            &nbsp;&nbsp;&nbsp;
            <label className='font-poppins-700 text-sm text-left font-black text-red-500'>
                {`     * ${error}`}
            </label>
          </>
        )}
      </div>
      <div>
      <Input className='border-2 border-black/80 w-11/12 h-10 rounded-3xl drop-shadow-custom hover:border-purple-500 '
        slotProps={{
          input: {
            type: tipo,
            name: name, 
            onChange: onChange,
            onBlur: onBlur,
            value: value,
            placeholder: `Ingrese el ${nombre_label}`,
            className: 'w-full h-full rounded-3xl px-3 py-2 font-bold focus: outline-none focus:ring-2 focus: ring-sky-400 focus:border-transparent' 
          }
        }}>
      </Input>
      </div>
    </div>
  )
}

export default InputField