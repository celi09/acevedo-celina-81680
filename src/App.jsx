import './App.css'
import NavBar from './components/NavBar'
import ItemCount from './components/ItemCount'
import ItemListContainer from './components/ItemListContainer'


function App() {
  console.log('App')

  return (
    <>
    <NavBar/>
    <ItemListContainer mensaje='Bienvenidos a coral'/>  
    <ItemCount stock={10}/>
    </>
  )
}

export default App
