import React from 'react';
import { useUser } from 'context/userContext';
import PrivateComponent from 'components/PrivateComponent';

const Admin = () => {
  const { userData } = useUser();
  console.log('Aqui tenemos el contexto desde admin.jsx',{userData});
  var rol=userData.rol;
  if(userData){
  if (rol==='ADMINISTRADOR' ){
  return (
    <PrivateComponent roleList={['ADMINISTRADOR']}>
  <div>Bienvenido {userData.nombre} {userData.apellido}, su rol es: {rol}</div>
  </PrivateComponent>
  );
  }
  else{
    return (
    <div>
    <h2>Persona {userData.nombre} {userData.apellido}. Su rol es: {rol}, no tine acceso de administrador.</h2>
    <h3>Si considera que su rol no es correcto, por favor escriba a: soporte@neklo.com</h3>
    </div>
    );
  }
}
else{
  return(
    <div>NO se ha iniciado sesión</div>
  );
}
};

export default Admin;
