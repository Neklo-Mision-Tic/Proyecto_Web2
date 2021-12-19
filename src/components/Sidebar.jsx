import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
<<<<<<< HEAD

const SidebarLinks = () => {
  return (
    <ul className='mt-5'>
      <SidebarRoute to='' title='Inicio' icon='fas fa-home' />
      <SidebarRoute to='/usuarios' title='Usuarios' icon='fas fa-users' />
      <SidebarRoute to='/page2' title='Pagina2' icon='fas fa-book' />
      <SidebarRoute to='/category1' title='Catego 1' icon='fab fa-amazon' />
      <SidebarRoute to='/category1/page1' title='Test' icon='fas fa-cars' />
=======
import { useAuth } from 'context/authContext';
import PrivateComponent from './PrivateComponent';

const SidebarLinks = () => {
  return (
    <ul className='mt-12'>
      <SidebarRoute to='' title='Inicio' icon='fas fa-home' />     
      
      <SidebarRoute to='/estudiantes' title='Estudiantes' icon='fas fa-user' />
      <SidebarRoute to='/proyectos' title='Proyectos1' icon='fas fa-archive' />
      <SidebarRoute to='/inscripciones' title='Inscripciones' icon='fas fa-edit' />
      <SidebarRoute to='/admin' title='Admin' icon='fas fa-tools' />
      <PrivateComponent roleList={['ADMINISTRADOR']}>
      <SidebarRoute to='/admin/usuarios' title='Usuarios' icon='fas fa-user' />
      {/* <SidebarRoute to='/admin/proyectos' title='Proyectos' icon='fas fa-archive' /> */}
      </PrivateComponent>
      <Logout />
>>>>>>> e1df3e3b733af89ec47d0b0cf2429b9457e5ea00
    </ul>
  );
};

<<<<<<< HEAD
const Logo = () => {
  return (
    <div className='py-10 w-full flex flex-col items-center justify-center'>
      <img src='logo.png' alt='Logo' className='h-50' />
      {/* <span className='my-2 text-xl font-bold text-center'>NEKLO - Gestión de Proyectos</span> */}
=======
const Logout = () => {
  const { setToken } = useAuth();
  const deleteToken = () => {
    console.log('eliminar token');
    setToken(null);
  };
  return (
    <li onClick={() => deleteToken()}>
      <NavLink to='/auth/login' className='sidebar-route text-red-700'>
        <div className='flex items-center'>
          <i className='fas fa-sign-out-alt' />
          <span className='text-sm  ml-2'>Cerrar Sesión</span>
        </div>
      </NavLink>
    </li>
  );
};

const Logo = () => {
  return (
    <div className='py-3 w-full flex flex-col items-center justify-center'>
      <img src='neklo.png' alt='Logo' className='h-16'/>
      
>>>>>>> e1df3e3b733af89ec47d0b0cf2429b9457e5ea00
    </div>
  );
};

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  return (
    <div className='flex flex-col md:flex-row flex-no-wrap md:h-full'>
      {/* Sidebar starts */}

      <div className='sidebar hidden md:flex'>
        <div className='px-8'>
          <Logo />
          <SidebarLinks />
        </div>
      </div>
      <div className='flex md:hidden w-full justify-between bg-gray-800 p-2 text-white'>
        <i className={`fas fa-${open ? 'times' : 'bars'}`} onClick={() => setOpen(!open)} />
        <i className='fas fa-home' />
      </div>
      {open && <ResponsiveSidebar />}
      {/* Sidebar ends */}
    </div>
  );
};

const ResponsiveSidebar = () => {
  return (
    <div>
      <div
        className='sidebar h-full z-40 absolute md:h-full sm:hidden transition duration-150 ease-in-out'
        id='mobile-nav'
      >
        <div className='px-8'>
          <Logo />
          <SidebarLinks />
        </div>
      </div>
    </div>
  );
};

const SidebarRoute = ({ to, title, icon }) => {
  return (
    <li>
      <NavLink
        to={to}
        className={({ isActive }) =>
          isActive
<<<<<<< HEAD
            ? 'sidebar-route text-white bg-blue-700'
            : 'sidebar-route text-black-900 hover:text-white hover:bg-blue-400'
=======
            ? 'sidebar-route text-white bg-indigo-700'
            : 'sidebar-route text-gray-900 hover:text-white hover:bg-indigo-400'
>>>>>>> e1df3e3b733af89ec47d0b0cf2429b9457e5ea00
        }
      >
        <div className='flex items-center'>
          <i className={icon} />
          <span className='text-sm  ml-2'>{title}</span>
        </div>
      </NavLink>
    </li>
  );
};

export default Sidebar;
