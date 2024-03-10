'use client';

import React from 'react'
import InputField from '../../../components/inputField.jsx';
import Link from 'next/link.js';
import { Button } from '@mui/base/Button';
import CuadroLogin from '@/components/cuadro_login.jsx';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import { Toaster } from 'react-hot-toast';
import {signin_user} from '@/services/authservice.js';
import axios from 'axios';

function LoginPage() {
  const [isSubmitting, setIsSubmitting] = useState(false); // Estado para controlar la habilitación/deshabilitación del botón
  const router = useRouter();

  const validationSchema = Yup.object({
    correo: Yup.string().email('Correo electrónico inválido').required('Este campo es obligatorio'),
    password: Yup.string().required('Este campo es obligatorio'),
  });
  const formik = useFormik({
    initialValues:{
      correo: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      const valores_finales = {
        correo: values.correo,
        password: values.password
      }
      console.log("Valores Finales:::")
      console.log(valores_finales)
      //signin_user(valores_finales)
      toast.promise(axios.post("/api/login",valores_finales), {
        loading: 'Rastreando Datos...🕵️‍♂️',
        success: 'Logueado con éxito, Redirigiendo a Home... 🚀',
        error: (error)=> <b>{error.response.data}</b>
      },{duration:5000}).then((result) => {
        console.log("Resultado de la promesa:::")
        console.log(result)
        router.push('/home');
        cookies().set('token', result.data, { path: '/' });
      }).catch((error) => {
        setIsSubmitting(false);
        console.log("Error de la promesa:::")
        console.log(error)
        });
    }
  });

  const submitForm = (e) => {
    e.preventDefault();
    if(!isSubmitting && formik.isValid ){
      setIsSubmitting(true);
    }else if(!formik.isValid){
      formik.handleSubmit();
    }
  }
  
  useEffect(() => {
    if(isSubmitting){
      formik.handleSubmit();
    }
  }, [isSubmitting])

  useEffect(() => {
    console.log(formik.values)
  }
  , [formik.values])
  return (
    <div className='w-screen h-screen'>
      <Toaster/>
        <div>
            <img className="h-screen w-screen pl-52 bottom-0 right-0 absolute" src="_assets/To do list-amico.svg" alt="logo" />
        </div>
          <CuadroLogin>
              <div className="w-full">
                <form onSubmit={submitForm}>
                  <InputField 
                    nombre_label={"Email"}
                    tipo={"text"}
                    name={"correo"} 
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.correo}
                    error={formik.errors.correo} 
                    showerror={formik.touched.correo && formik.errors.correo}
                  />
                  <InputField 
                      nombre_label={"Contraseña"}
                      tipo={"password"}
                      name={"password"}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.password} 
                      error={formik.errors.password} 
                      showerror={formik.touched.password && formik.errors.password}
                  />
                  <div className='w-boton_login h-12 mx-auto object-none'>
                    <Button type="submit" className='bg-gradient-to-br from-[#544E9F] to-[#6DA7CC] hover:from-[#6DA7CC] hover:to-[#544E9F] hover:transition-all duration-300 hover:scale-105 hover:shadow-md hover:ring-2 hover:ring-[#6DA7CC] mt-5 w-full h-full rounded-custom font-andada font-bold text-3xl'>Login</Button>
                  </div>
                </form>
                <div className="w-11/12 h-0.5 bg-gray-500 mx-auto mt-8"></div>
                <div className='w-boton_login mx-auto flex items-center flex-col'>
                  <Button className='h-12 bg-white border-2 border-black hover:from-[#6DA7CC] hover:to-[#544E9F] hover:transition-all duration-300 hover:scale-105 hover:shadow-md hover:ring-2 hover:ring-[#6DA7CC] mt-5 w-full rounded-custom text-3xl'>
                    <img src="_assets/logo_google.png" className="h-8 w-8 object-cover inline-block"/>
                    <span className="ml-9 font-poppins-700 font-extrabold">Login with Google</span>
                  </Button>
                  <label className="font-poppins-700 font-extrabold text-2xl flex justify-center items-center text-center mt-3">OR</label>
                  <Link href="/signup" legacyBehavior>
                    <Button className='h-12 bg-gradient-to-br from-[#84A98C] to-[#59C3CE] hover:from-[#59C3CE] hover:to-[#84A98C] hover:transition-all duration-300 hover:scale-105 hover:shadow-md hover:ring-2 hover:ring-[#6DA7CC] mt-2 w-full rounded-custom font-andada font-bold text-3xl'>
                      Sign up
                    </Button>
                  </Link>
                </div>
              </div>
          </CuadroLogin>
    </div>
  )
}

export default LoginPage