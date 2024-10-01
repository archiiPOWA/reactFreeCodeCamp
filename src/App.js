import './App.css';
import Testimonio from './Componentes/Testimonio';


function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
          <h1>Esto es lo que dicen nuestros Alumnos</h1>
      <Testimonio
      nombre='Wall E'
      pais='Argentina'
      imagen= 'walle'
      empresa='TodoFactory'
      cargo='Ingeniero de Robotica'
      testimonio='Siempre tuve problemas para encontrar vida en este planeta'

      />
      <Testimonio
      nombre='Eve'
      pais='Chile'
      imagen= 'code'
      empresa='SilverCrew'
      cargo='Ingeniero de Cloud'
      testimonio='Siempre tuve problemas para encontrar vida en este planeta'

      />
      </div>
    </div>
  );
}

export default App;
