<<<<<<< HEAD
import { useQuery } from '@apollo/client'
import { GET_USUARIOS } from 'graphql/usuarios/queries'
import React from 'react'
import {useEffect} from 'react'


function IndexUsuarios() {
    const {data, error, loading} = useQuery(GET_USUARIOS);

    useEffect(() => {
        console.log("data servidor", data);
    }, [data]);


    return (
        //<PrivateRoute roleList={['ADMINISTRADOR']}>
          <div>
            Información Usuarios:
            <table className='tabla'>
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Apellidos</th>
                  <th>Correo</th>
                  <th>Identificación</th>
                  <th>Rol</th>
                  <th>Estado</th>
                  <th>Editar</th>
                </tr>
              </thead>
              <tbody>
                {data && data.Usuarios ? (
                  <>
                    {data.Usuarios.map((u) => {
                      return (
                        <tr key={u._id}>
                          <td>{u.nombre}</td>
                          <td>{u.apellido}</td>
                          <td>{u.correo}</td>
                          <td>{u.identificacion}</td>
                          <td>{u.rol}</td>
                          {/* <td>
                            <Link to={`/usuarios/editar/${u._id}`}>
                              <i className='fas fa-pen text-yellow-600 hover:text-yellow-400 cursor-pointer' />
                            </Link>
                          </td> */}
                        </tr>
                      );
                    })}
                  </>
                ) : (
                  <div>No autorizado</div>
                )}
              </tbody>
            </table>
          </div>
        //</PrivateRoute>
      );
    };




export default IndexUsuarios
=======
import { useQuery } from "@apollo/client";
import { GET_USUARIOS } from "graphql/usuarios/queries";
import React, {useEffect} from "react";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { Enum_Rol } from "utils/enums";
import { Enum_EstadoUsuario } from "utils/enums";
import PrivateRoute from "components/PrivateRouter";
import PrivateComponent from "components/PrivateComponent";
//import { useUser } from 'context/userContext';



const IndexUsuarios=()=>{
    /*const { userData } = useUser();
    console.log('Aqui tenemos el contexto desde indes de usuario.jsx',{userData});
    var rolLogueado=userData.rol;*/
    
    const {data, error, loading}=useQuery(GET_USUARIOS);
    useEffect(() => {
        console.log('Datos servidor ',data);
    }, [data]);
    useEffect(() => {
        if(error){
            toast.error('Error consultando los usuarios');
        }        
    }, [error]);
    if(loading) return <div>Cargando...</div>;
    return(
       <PrivateRoute roleList={["ADMINISTRADOR"]}> 
    
        <div>
            <h1 className='text-3xl font-bold my-4'>Usuarios</h1>
            <table className='tabla'>
            <thead>
                <tr>
                    <th>Nombres</th>
                    <th>Apellidos</th>
                    <th>Correo</th>
                    <th>Identificación</th>
                    <th>Rol</th>
                    <th>Estado</th>
                    <th colSpan={2}>Editar</th>
                </tr>
            </thead>
            <tbody>
                {data &&
                    data.Usuarios.map((u)=>{
                        return(
                    <tr key={u._id}>
                        <td>{u.nombre}</td>
                        <td>{u.apellido}</td>
                        <td>{u.correo}</td>
                        <td>{u.identificacion}</td>
                        <td>{Enum_Rol[u.rol]}</td>
                        <td>{Enum_EstadoUsuario[u.estado]}</td>
                        
                        <td>
                        <Link to={`/usuarios/editar/${u._id}`}>
                          <i className='fas fa-pen text-yellow-600 hover:text-yellow-400 cursor-pointer' />
                        </Link>  
                        </td>
                    
                    
                        <PrivateComponent roleList={['ADMINISTRADOR']}>
                        <td>
                        <Link to={`/usuarios/eliminar/${u._id}`}>
                          <i className='fas fa-trash-alt text-yellow-600 hover:text-yellow-400 cursor-pointer' />
                        </Link>
                        </td>
                        </PrivateComponent>
                    </tr>
                );
                })}
            </tbody>
            </table>
        </div>
        </PrivateRoute>
        
    )
}
export default IndexUsuarios;
>>>>>>> e1df3e3b733af89ec47d0b0cf2429b9457e5ea00
