import './App.css'
import MiNavBar from './componentes/NavBar'
import ItemListContainer from './componentes/ItemListContainer'
import MiFooter from './componentes/Footer'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MiNavBar nombre="FHierro's" />
      </header>
      <section>
        <ItemListContainer contenido="Holaaaa" />
      </section>
      <MiFooter />
    </div>
  )
}

export default App
