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