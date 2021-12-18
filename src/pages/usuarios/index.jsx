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
