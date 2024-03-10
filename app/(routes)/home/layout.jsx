import NavBar from '@/components/navbar'
import React from 'react'
import imagenFondo from '@/public/_assets/Reminders-amico.svg'

export default function RootLayout({ children,}) {
    return (
        <div className='h-full'>
            <NavBar />
            <div className='absolute h-5/6 w-screen items-center justify-center flex right-0 bottom-0 z-0'>
                <img
                    className="h-full w-full  bottom-0 right-0 opacity-15"
                    src="_assets/Reminders-amico.svg"
                    alt="logo"
                />
            </div>
            <div className="absolute h-5/6 w-screen z-auto right-0 bottom-0">
             {children}
            </div>
        </div>

    )
}
