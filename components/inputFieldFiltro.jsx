'use client'

import React from 'react'
import {Input} from '@mui/base/Input'

function InputFieldFiltro({nombre_label, tipo, name,onChange, onBlur, value,}) {
  return (
    <div className='mt-2 ml-5'>
      <label className='font-poppins-700 text-2xl text-left font-black'>
        {nombre_label}
      </label>
      <div>
      <Input className='border-0 border-black/80 w-11/12 h-10 rounded-input_filtro drop-shadow-custom hover:border-purple-500 '
        slotProps={{
          input: {
            type: tipo,
            name: name, 
            onChange: onChange,
            onBlur: onBlur,
            value: value,
            placeholder: 'Buscar...',
            className: 'w-full h-full rounded-input_filtro px-3 py-2 font-bold focus: outline-none focus:ring-2 focus: ring-sky-400 focus:border-transparent' 
          }
        }}>
      </Input>
      </div>
    </div>
  )
}

export default InputFieldFiltro