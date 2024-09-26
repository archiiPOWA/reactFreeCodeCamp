import React from 'react';

export function Testimonio() {
  return(
    <div className='contenedor-testimonio'>
      <img 
        className='imagen-testimonio'
        src={require('../imagenes/Logo-e.jpeg')}
        alt="foto wall-e"/>
    
    <div className="contenedor-texto-testimonio">
        <p className='nombre-testimonio'>Wall-e te regala una naranja</p>
        <p className="cargo-testimonio">Ingeniero del mundo</p>
        <p className="texto-testimonio"> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam ex sed rerum aspernatur ut dicta modi aliquid voluptas, in deserunt consectetur distinctio porro fuga, 
          suscipit facere harum voluptatibus maxime neque.</p>
      </div>
    </div >
  );
}

