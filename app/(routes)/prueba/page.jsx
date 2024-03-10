'use client'

import React from 'react'
import { Menu, MenuButton, MenuItem, Dropdown } from '@mui/base'

function PaginaPrueba() {
  return (
    <Dropdown>
    <MenuButton>My account</MenuButton>
    <Menu>
      <MenuItem >Profile</MenuItem>
      <MenuItem >
        Language settings
      </MenuItem>
      <MenuItem>Log out</MenuItem>
    </Menu>
  </Dropdown>
  )
}

export default PaginaPrueba