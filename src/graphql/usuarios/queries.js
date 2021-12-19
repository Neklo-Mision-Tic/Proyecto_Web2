<<<<<<< HEAD
import { gql } from "@apollo/client";

const GET_USUARIOS = gql `
query Usuarios {
  Usuarios {
    _id
    nombre
    apellido
    correo
    identificacion
    rol
  }
}
`;
export {GET_USUARIOS}
=======
import {gql} from '@apollo/client';

const GET_USUARIOS=gql`
query Usuarios {
    Usuarios {
      _id
      nombre
      apellido
      identificacion
      correo
      estado
      rol
    }
  }
`

const GET_USUARIO=gql`
query BuscarUsuario($_id: String!) {
  buscarUsuario(_id: $_id) {
      _id
      nombre
      apellido
      identificacion
      correo
      estado
      rol
  }
}
`
const GET_LIDERES=gql`
query BuscarLider {
  buscarLider {
    nombre
    apellido
    _id
  }
}
`
export {GET_USUARIOS, GET_USUARIO,GET_LIDERES};
>>>>>>> e1df3e3b733af89ec47d0b0cf2429b9457e5ea00
