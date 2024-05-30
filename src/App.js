import './App.css';
import eurekaeLogo from './images/logo.png'
import ListaDeTareas from './components/ListaDeTareas';

function App() {
  return (
    <div className="aplicacion-tareas">
      <div className='eurekae-logo-contenedor'>
        <img src={eurekaeLogo} className='eurekae-logo' />
      </div>
      <div className='tareas-lista-principal'>
        <h1>Mis Tareas</h1>
        <ListaDeTareas />
      </div>
    </div>
  );
}

export default App;
