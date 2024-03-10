'use client'

import React from 'react'
import { TextareaAutosize } from '@mui/base'

function InputField({nombre_label, tipo, name,onChange, onBlur, value,}) {
  return (
    <div className='mt-2 ml-5 w-full'>
      <label className='font-poppins-700 text-2xl text-left font-black'>
        {nombre_label}
      </label>
      <div>
      <TextareaAutosize 
        className='border-2 border-black/80 w-11/12 h-10 rounded-3xl drop-shadow-custom hover:border-purple-500 focus: outline-none focus:ring-2 focus: ring-sky-400 focus:border-transparent'
        typeof='text'
        name={name}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        minRows={3}
        maxRows={3}
        placeholder='Ingrese la descripción del recordatorio...'
        style={{
            padding: '10px',
            minHeight: '9%', // Altura para una fila
            maxHeight: '9%', // Altura máxima para una fila
            transition: 'border 0.3s, box-shadow 0.3s',
            '&:focus': {
              borderColor: '#93C5FD',
              boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.3)',
            },
            resize: 'none',
        }}
        >
      </TextareaAutosize>
      </div>
    </div>
  )
}

export default InputField