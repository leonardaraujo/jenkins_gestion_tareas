import logo from './logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edita el archivo <code>src/App.js</code> y guarda para recargar.
        </p>
        <a
          className="App-link"
          href="https://es.react.dev/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Documentación de React
        </a>
      </header>
    </div>
  );
}

export default App;
