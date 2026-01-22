import './App.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'


function App() {
  console.log('App')

  return (
    <>
    <NavBar/>
    <ItemListContainer mensaje='Bienvenidos a coral'/>  
    </>
  )
}

export default App
