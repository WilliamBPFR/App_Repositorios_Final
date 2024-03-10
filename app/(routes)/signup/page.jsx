'use client';

import CuadroLogin from '@/components/cuadro_login'
import InputField from '@/components/inputField'
import { Button } from '@mui/base/Button'
import Link from 'next/link'
import React, { useEffect,useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { register_user } from '@/services/signupservice'
import toast from 'react-hot-toast';
import { Toaster } from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import { encriptpassword } from '@/services/passwordservice';
import { createToken} from '@/services/jwtservice.js';

import axios from 'axios';

function PaginaRegistro() {
  const [isSubmitting, setIsSubmitting] = useState(false); // Estado para controlar la habilitación/deshabilitación del botón
  const router = useRouter();

  const validationSchema = Yup.object({
    nombre: Yup.string().required('Este campo es obligatorio'),
    password: Yup.string()
    .min(8, 'Debe tener al menos 8 caracteres')
    .matches(/[a-z]/, 'Debe contener al menos una letra minúscula')
    .matches(/[A-Z]/, 'Debe contener al menos una letra mayúscula')
    .matches(/[0-9]/, 'Debe contener al menos un número')
    .matches(/[!@#$%^&*(),.?":{}|<>]/, 'Debe contener al menos un carácter especial')
    .required('La contraseña es requerida'),
    correo: Yup.string().email('Correo electrónico inválido').required('Este campo es obligatorio'),
  });

 

  const formik = useFormik({
    initialValues:{
      nombre: '',
      password: '',
      correo: '',
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      const [hash_password, salt] = await encriptpassword(values.password);
      console.log("Subiendo datos al servidor...");
      const valores_finales = {
        correo: values.correo,
        fecha_creacion: new Date().getTime(), 
        hash_password: hash_password,
        nombre: values.nombre,
        salt: salt
      }
      console.log("Valores Finales:::")
      console.log(valores_finales)

      //register_user(valores_finales)

      toast.promise(axios.post("api/signin",valores_finales), {
        loading: 'Creando cuenta...',
        success: 'Cuenta creada con éxito, Redirigiendo a Login... 🚀',
        error: (error)=> <b>{error.response.data}</b>
      },{duration:5000}).then((result) => {
        console.log("Resultado de la promesa:::")
        console.log(result)
        setTimeout(() => {
          router.push('/login');
        }, 3000); // 3000 milisegundos = 3 segundos
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

  return (
    <div className='w-screen h-screen'>
       <Toaster /> {/* Aquí se agrega el ToastContainer */}
        <div>
            <img className="h-full w-4/5 pl-2 bottom-0 left-0 absolute" src="_assets/Calendar-amico.svg" alt="logo" />
        </div>

        <CuadroLogin derecha={true}>
            <div className="w-full">
              <form onSubmit={submitForm}>
                <InputField nombre_label={"Nombre"} name={"nombre"} onChange={formik.handleChange} value={formik.values.nombre} error={formik.errors.nombre} showerror={formik.touched.nombre && formik.errors.nombre}/>
                <InputField nombre_label={"Email"} name={"correo"} onChange={formik.handleChange} value={formik.values.correo} error={formik.errors.correo} showerror={formik.touched.correo && formik.errors.correo}/>
                <InputField nombre_label={"Password"} name={"password"} tipo={"password"} onChange={formik.handleChange} value={formik.values.password} error={formik.errors.password} showerror={formik.touched.password && formik.errors.password}/>
                <div className='w-boton_login h-12 mx-auto object-none'>
                  <Button disabled={isSubmitting} type='submit' className='bg-gradient-to-br from-[#544E9F] to-[#6DA7CC] hover:from-[#6DA7CC] hover:to-[#544E9F] hover:transition-all duration-300 hover:scale-105 hover:shadow-md hover:ring-2 hover:ring-[#6DA7CC] mt-5 w-full h-full rounded-custom font-andada font-bold text-3xl'>
                   {isSubmitting ? 'Guardando...' : 'Crear Cuenta'}
                  </Button>
                </div>
              </form>
                <div className="w-11/12 h-0.5 bg-gray-500 mx-auto mt-8"></div>
                <div className='w-boton_login mx-auto flex items-center flex-col'>
                  <Button className='h-12 bg-white border-2 border-black hover:from-[#6DA7CC] hover:to-[#544E9F] hover:transition-all duration-300 hover:scale-105 hover:shadow-md hover:ring-2 hover:ring-[#6DA7CC] mt-5 w-full rounded-custom text-3xl'>
                    <img src="_assets/logo_google.png" className="h-8 w-8 object-cover inline-block"/>
                    <span className="ml-9 font-poppins-700 font-extrabold">Signup with Google</span>
                  </Button>
                  <Link href="/login" legacyBehavior>
                    <Button className='bg-gradient-to-br from-[#4CAF50] to-[#8BC34A] hover:from-[#66BB6A] hover:to-[#AED581] hover:transition-all duration-300 hover:scale-105 hover:shadow-md hover:ring-2 hover:ring-[#6DA7CC] mt-5 w-3/5 h-full rounded-custom font-andada font-bold text-xl'>
                      Volver a Login
                    </Button>
                  </Link>
                </div>
            </div>
        </CuadroLogin>
    </div>
  )
}

export default PaginaRegistro