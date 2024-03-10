'use client'
import { Button } from '@mui/base';
import React from 'react';
import { useState } from 'react';
import { IoIosNotificationsOutline } from "react-icons/io";
import CircleAvatar from './circle_avatar';
import { Menu, MenuButton, MenuItem, Dropdown } from '@mui/base'
import ModalCrearRecordatorio from './modal_crear_recordatorio';
import { useRouter } from 'next/navigation';
import axios from 'axios';


function NavBar() {
  const [showNotification, setShowNotification] = useState(false);
  const [showAvatarMenu, setShowAvatarMenu] = useState(false);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const router = useRouter();

  useState(() => {
    console.log("Verificando si el usuario está logueado...");
      axios.post("/api/auth").then((res) => {
        console.log("Este es el token:")
        console.log(res);
      }).catch((err) => {
        console.log("El usuario no está logueado")
        console.log(err);
        router.push("/login");
      });
    }, []);

  const handleShowNotification = () => {
    setShowNotification(!showNotification);
  };

  const handleShowAvatarMenu = () => {
    setShowAvatarMenu(!showAvatarMenu);
  }
  return (
    <>
      <nav className='flex items-center p-3 bg-[#52489C]/50 rounded-bl-md rounded-br-md shadow-md mb-4 shadow-nav_bar z-50' >     
          <div className='w-img-navbar h-img-navbar pl-2'>
            <img src="_assets/logo_rememberme.png" alt="logo" />
          </div>
          <label className="font-aladin font-bold text-6xl pl-7">
              Remember Me
          </label> 
          <div className='flex justify-end items-center space-x-4 ml-auto mr-6'>
              <Button 
                className="bg-[#b274ca] text-2xl font-poppins-700 font-extrabold py-2 px-4 rounded-boton_navbar border-boton_navbar h-boton-navbar w-boton-navbar border-black/50 hover:bg-gradient-to-br hover:from-[#6DA7CC] hover:to-[#544E9F] hover:transition-all duration-300 hover:scale-105 hover:shadow-md hover:ring-2 hover:ring-[#6DA7CC]" 
                slotProps={{
                    button:{
                      className: ''
                    }
                }}
                onClick={handleOpen}
              >
                Crear Recordatorio
              </Button>
            <Button onClick={handleShowNotification}>
              <IoIosNotificationsOutline 
                size={50} 
                className={`transition-colors duration-300 ease-in-out ${showNotification ? 'text-[#f03e74]' : ''}`}
              />
            </Button>
            <Dropdown open={showAvatarMenu}>
              <MenuButton 
                className='h-boton-avatar w-boton-avatar '
                onClick={handleShowAvatarMenu}
              >
                <CircleAvatar 
                  src="_assets/default_avatar.png" 
                  alt="avatar" 
                  size={`h-full w-full border-boton_navbar border-[#52489c] transition-colors duration-300 ease-in-out ${showAvatarMenu ? 'border-[#f03e74]' : ''}`}
                />
              </MenuButton>
              <Menu className={`bg-[#F9F4F4] p-1 rounded-3xl mt-1 relative border-2 border-[#8D8A8A] w-dropdown-foto-perfil animate-${showAvatarMenu ? 'fadeIn' : 'fadeOut'}`}>
                  <Button className='w-full my-1 '>
                    <MenuItem className='hover:bg-[#b9adad] rounded-3xl'>
                      Perfil
                    </MenuItem>
                  </Button>
                  <Button className='w-full my-1'>
                    <MenuItem className='hover:bg-[#b9adad] rounded-3xl'>
                      Recordatorios
                    </MenuItem>
                  </Button>
                  <Button className='w-full my-1'>
                    <MenuItem className='hover:bg-[#b9adad] rounded-3xl'>
                      Donación
                    </MenuItem>
                  </Button>
                  <div className='w-full my-1 bg-[#B174C9] h-linea_menu_dropdown'></div>
                  <Button className='w-full my-1'>
                    <MenuItem className='hover:bg-[#b9adad] rounded-3xl'>
                      Sobre la App
                    </MenuItem>
                  </Button>
                  <Button className='w-full my-1'>
                    <MenuItem className='hover:bg-[#b9adad] rounded-3xl'>
                      Creadores
                    </MenuItem>
                  </Button>
                  <div className='w-full my-1 bg-[#B174C9] h-linea_menu_dropdown'></div>
                  <Button className='w-full my-1'>
                    <MenuItem className='hover:bg-[#b9adad] rounded-3xl'>
                      Cerrar Sesión
                    </MenuItem>
                  </Button>
                </Menu>
            </Dropdown>
          </div>
      </nav>
      <ModalCrearRecordatorio open={open} onClose={handleClose}></ModalCrearRecordatorio>
    </>
    
  );
}

export default NavBar;
