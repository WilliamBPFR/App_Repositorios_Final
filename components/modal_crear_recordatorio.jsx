'use client'

import React, { use } from 'react'
import { Modal } from '@mui/base/Modal';
import Fade from '@mui/material/Fade';
import { useState,useEffect } from 'react';
import InputField from './inputField';
import DropDownInput from './dropdownItem';
import TextAreaField from './textareafield';
import { Button } from '@mui/base';
import { IoIosCloseCircleOutline } from "react-icons/io";
import * as Yup from 'yup';
import { useFormik } from 'formik';


function ModalCrearRecordatorio({open, onClose}) {

    const validationSchema = Yup.object({
          nombre_recordatorio: Yup.string().required('Este campo es obligatorio'),
          descripcion: Yup.string().required('Este campo es obligatorio'),
          fecha_recordatorio: Yup.number().required('Este campo es obligatorio'),
          tipo_recordatorio: Yup.string().required('Este campo es obligatorio'),
      });
      const formik = useFormik({
        initialValues:{
          nombre_recordatorio: '',
          descripcion: '',
          fecha_recordatorio: '',
          tipo_recordatorio: '',
        },
        validationSchema: validationSchema,
        onSubmit: values => {
          console.log(values);
        }
      });

      useEffect(() => {
        console.log(formik.values);
      },[formik.values]);

  return (
    <Modal
        open={open}
        onClose={onClose}
        className='fixed inset-0 z-50 flex items-center justify-center bg-black/50'
    >
        <Fade in={open}>
            <div className="absolute w-modal h-4/5 flex flex-col overflow-hidden bg-white rounded-lg p-4 justify-center items-center">
                <Button className='absolute top-0 right-0 m-4'>
                    <IoIosCloseCircleOutline size={30} className='ml-auto' onClick={onClose}/>
                </Button>
                <h2 id="transition-modal-title" className="font-poppins-700 font-extrabold text-3xl">
                    Crear Nuevo Recordatorio
                </h2>
                {/* <label className='justify-start mt-6 font-poppins-700 text-xl font-semibold'>
                    Nombre del Recordatorio
                </label> */}
                <div className='w-full mt-6'>
                    <InputField
                        nombre_label={'Nombre del Recordatorio'}
                        tipo={'text'}
                        name={'nombre_recordatorio'}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.nombre_recordatorio}
                    >
                    </InputField>
                </div>

                <div className='w-full mt-6'>
                    <TextAreaField
                        nombre_label={'Descripción del Recordatorio'}
                        tipo={'text'}
                        name={'descripcion'}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.descripcion}
                    >
                    </TextAreaField>
                </div>
                <div className=' w-full flex items mt-5'>
                    <div className='w-full ml-auto'>
                        <InputField
                            nombre_label={'Fecha a Recordar'}
                            tipo={'datetime-local'}
                            name={'fecha_recordatorio'}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.fecha_recordatorio}
                            
                        >
                        </InputField>
                    </div>

                    <div className='w-full items-start justify-start ml-auto'>
                        <DropDownInput
                            nombre_label={'Tipo de Recordatorio'}
                            tipo={'datetime-local'}
                            name={'tipo_recordatorio'}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.tipo_recordatorio}
                        >
                        </DropDownInput>
                    </div>
                </div>

                <div className=' w-full flex items-center justify-center'>
                    <div className='w-full mx-12 h-12 justify-center'>
                        <Button 
                            type="submit" 
                            className='bg-[#BD6B73] hover:from-[#6DA7CC] hover:to-[#544E9F] hover:transition-all duration-300 hover:scale-105 hover:shadow-md hover:ring-2 hover:ring-[#6DA7CC] mt-5 w-full h-full rounded-custom font-poppins-700 font-bold text-3xl text-white'
                            onClick={onClose}
                        >
                            Cancelar
                        </Button>
                    </div>

                    <div className='w-full mx-12 h-12 object-none'>
                        <Button 
                            type="submit" 
                            className='bg-[#52489C] hover:from-[#6DA7CC] hover:to-[#544E9F] hover:transition-all duration-300 hover:scale-105 hover:shadow-md hover:ring-2 hover:ring-[#6DA7CC] mt-5 w-full h-full rounded-custom font-poppins-700 font-bold text-3xl text-white'
                        >
                            Guardar
                        </Button>
                    </div>
                </div>
            </div>
        </Fade>
    </Modal>
  )
}

export default ModalCrearRecordatorio