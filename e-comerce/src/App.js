import MiNavBar from './componentes/NavBar.js'
import ItemListContainer from './componentes/ItemListContainer.js'
import './App.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MiNavBar nombre="FHierro's"/>
      </header>
      <ItemListContainer contenido="Holaaaa"/>
    </div>
  )
}

export default App
