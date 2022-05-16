import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
  {
    title: 'Inicio',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Perfil',
    path: '/profile',
    icon: <FaIcons.FaUser />,
    cName: 'nav-text'
  },
  {
    title: 'Mapa',
    path: '/mapa',
    icon: <FaIcons.FaMapMarkedAlt/>,
    cName: 'nav-text'
  },
  {
    title: 'Reportes',
    path: '/reports',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  {
    title: 'Recomendados',
    path: '/recomendations',
    icon: <IoIcons.IoMdPeople />,
    cName: 'nav-text'
  },
  {
    title: 'Conocenos',
    path: '/about',
    icon: <IoIcons.IoMdHelpCircle />,
    cName: 'nav-text'
  }
];
