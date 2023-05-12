import React from 'react';
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Box,
} from '@chakra-ui/react';

import { HamburgerIcon } from '@chakra-ui/icons';

import './Navbar.css';

const MenuNavbar = () => (
  <Menu>
    <MenuButton
      as={IconButton}
      aria-label="Menu de Navegación"
      icon={<HamburgerIcon />}
      variant="outline"
      display={{ base: 'block', md: 'none' }}
    />
    <MenuList>
      <MenuItem as="a" href="#about" _hover={{ backgroundColor: 'gray.600' }}>
        Sobre mí
      </MenuItem>
      <MenuItem
        as="a"
        href="#experience"
        _hover={{ backgroundColor: 'gray.600' }}
      >
        Experiencia
      </MenuItem>
      <MenuItem
        as="a"
        href="#projects"
        _hover={{ backgroundColor: 'gray.600' }}
      >
        Proyectos
      </MenuItem>
      <MenuItem as="a" href="#contact" _hover={{ backgroundColor: 'gray.600' }}>
        Contacto
      </MenuItem>
    </MenuList>
  </Menu>
);

const FullNavbar = () => (
  <Box as="ul" className="navbar" display={{ base: 'none', md: 'flex' }}>
    <li>
      <a href="#about">Sobre mí</a>
    </li>
    <li>
      <a href="#experience">Experiencia</a>
    </li>
    <li>
      <a href="#projects">Proyectos</a>
    </li>
    <li>
      <a href="#contact">Contacto</a>
    </li>
  </Box>
);

function Navbar() {
  return (
    <header className="header">
      <span>
        <a href=".">Carlos Ruiz</a>
      </span>
      <nav>
        <MenuNavbar />
        <FullNavbar />
      </nav>
    </header>
  );
}

export { Navbar };
