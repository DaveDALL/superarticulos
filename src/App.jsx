import './App.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'

function App() {
  return (
    <>
      <div>
        <NavBar />
      </div>
      <div>
        <ItemListContainer greetings={<p className="saludo">¡Bienvenido a SuperArticulos!<br></br>Desde los mas extraños hasta los mas grandiosos</p>}/>
      </div>
    </>
  )
}

export default App