import React from 'react';
import "../styles/footer.css";

const Index = () => {
  return (
    <div>
      <div className=' text-3xl font-bold  h-60'>Neklo - Gestión de Proyectos</div>
      

      <footer>
                <div className="container_footer">
                    <div className="box_footer">
                        {/* <div className="logo_footer">
                            <img src="https://github.com/Runteams-MisionTIC/Proyecto_web/blob/main/media/logo.png?raw=true" alt="logo" />
                        </div> */}
                        <div className="terms"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione ea esse sapiente soluta. Aut possimus non, aliquid soluta odit temporibus fugiat dolor quam iure placeat laudantium praesentium eum nesciunt nostrum.</p></div>
                    </div>
                    <div className="box_footer">
                        <h2>Soluciones</h2>
                        <p>App Desarrollo</p>
                        <p>App Marketing</p>
                        <p>IOS Desarrollo</p>
                        <p>Android Desarrollo</p>
                    </div>
                    <div className="box_footer">
                        <h2>Compañia</h2>
                        <p>Acerca de</p>
                        <p>Trabajos</p>
                        <p>Procesos</p>
                        <p>Servicios</p>
                    </div>
                    <div className="box_footer">
                        <h2>Redes Sociales</h2>
                        <a href="https://www.facebook.com/MisionTIC2022Ruta1UTP/"><i className="fab fa-facebook-square"></i> Facebook</a>
                        <a href="https://www.facebook.com/MisionTIC2022Ruta1UTP/"><i className="fab fa-twitter-square"></i> Twitter</a>
                        <a href="https://www.facebook.com/MisionTIC2022Ruta1UTP/"><i className="fab fa-instagram-square"></i> Instagram</a>
                    </div>
                </div>
                <div className="box_copy">
                    <hr />
                    <p>Todos los derechos son reservados © 2021
                        <b>Neklo</b>
                    </p>
                </div>
            </footer>



    </div>
  );
};

export default Index;