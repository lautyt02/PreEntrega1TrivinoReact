import logo from './logo.svg'
import NavBar from './componentes/NavBar.js'
import CartWidget from './componentes/CartWidget.js'
import ItemListContainer from './componentes/ItemListContainer.js'
import '/node_modules/bootstrap/dist/css/bootstrap.css'
import './App.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App
