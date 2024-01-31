
import React from 'react'
import InputField from '../../../components/inputField.jsx';
import { Button } from '@mui/base/Button';

function LoginPage() {
  return (
    <div className='w-screen h-screen'>
        <div>
            <img className="h-screen w-screen pl-52 bottom-0 right-0 absolute" src="_assets/To do list-amico.svg" alt="logo" />
        </div>

        <div className="ml-12 mt-6 absolute w-4/12 rounded-3xl h-div-login border-2 border-black bg-gradient-to-br from-[#F8F8F8] to-[#FFFAFA]/80 ">
            <div>
              <div className="w-40 h-32 mx-auto mt-8 object-none">
                <img src="_assets/logo_rememberme.png" className="h-full w-full object-cover"/> 
              </div>
              <div className="w-full mt-5">
                <label className="font-aladin font-bold text-6xl flex justify-center text-center">
                  Remember Me
                </label> 
                <InputField nombre_label={"Email"} />
                <InputField nombre_label={"Password"} />
                <div className='w-boton_login h-12 mx-auto object-none'>
                  <Button className='bg-gradient-to-br from-[#544E9F] to-[#6DA7CC] hover:from-[#6DA7CC] hover:to-[#544E9F] hover:transition-all duration-300 hover:scale-105 hover:shadow-md hover:ring-2 hover:ring-[#6DA7CC] mt-5 w-full h-full rounded-custom font-andada font-bold text-3xl'>Login</Button>
                </div>
                <div className="w-11/12 h-0.5 bg-gray-500 mx-auto mt-8"></div>
                <div className='w-boton_login mx-auto flex items-center flex-col'>
                  <Button className='h-12 bg-white border-2 border-black hover:from-[#6DA7CC] hover:to-[#544E9F] hover:transition-all duration-300 hover:scale-105 hover:shadow-md hover:ring-2 hover:ring-[#6DA7CC] mt-5 w-full rounded-custom text-3xl'>
                    <img src="_assets/logo_google.png" className="h-8 w-8 object-cover inline-block"/>
                    <span className="ml-9 font-poppins-700 font-extrabold">Login with Google</span>
                  </Button>
                  <label className="font-poppins-700 font-extrabold text-2xl flex justify-center items-center text-center mt-3">OR</label>
                  <Button className='h-12 bg-gradient-to-br from-[#84A98C] to-[#59C3CE] hover:from-[#6DA7CC] hover:to-[#544E9F] hover:transition-all duration-300 hover:scale-105 hover:shadow-md hover:ring-2 hover:ring-[#6DA7CC] mt-2 w-full rounded-custom font-andada font-bold text-3xl'>Sign up</Button>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default LoginPage