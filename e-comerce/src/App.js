import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MiNavBar from './componentes/NavBar'
import ItemListContainer from './componentes/ItemListContainer'
import MiFooter from './componentes/Footer'
import ItemDetailContainer from './componentes/ItemDetailContainer'
import Carrito from './componentes/Carrito'
import Contacto from './componentes/Contacto'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header className="App-header">
          <MiNavBar nombre="FHierro's" />
        </header>
        <Routes>
          <Route exact path='/' element={<ItemListContainer contenido="Por defecto" />} />
          <Route exact path='/category/:id' element={<ItemListContainer contenido="Category/:id" />} />
          <Route exact path='/item/:id' element={<ItemDetailContainer mensaje="ItemDetail" />} />
          <Route exact path='/carrito/' element={<Carrito />} />
          <Route exact path='/contacto/' element={<Contacto />} />
        </Routes>
      </BrowserRouter>
      <MiFooter />
    </div>

  )
}

export default App

{/* <div className="App">
        <header className="App-header">
          <MiNavBar nombre="FHierro's" />
        </header>
        <section>
          <ItemListContainer contenido="Holaaaa" />
        </section>
        <MiFooter />
      </div> */}