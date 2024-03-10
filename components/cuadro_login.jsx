import React from 'react'

function CuadroLogin({ children, derecha=false }) {
  return (
    <div className={` mt-6 absolute w-4/12 rounded-3xl h-div-login border-2 border-black bg-gradient-to-br from-[#F8F8F8] to-[#FFFAFA]/80 ${derecha ? 'right-0 mr-12' : 'left-0 ml-12'}`}>
        <div>
            <div className="w-40 h-32 mx-auto mt-8 object-none">
                <img src="_assets/logo_rememberme.png" className="h-full w-full object-cover"/> 
            </div>
            <div className="w-full mt-5">
                <label className="font-aladin font-bold text-6xl flex justify-center text-center">
                    Remember Me
                </label> 
            </div>
        <div className="w-full mt-5">
          {children}
        </div>
        </div>

    </div>
  )
}

export default CuadroLogin