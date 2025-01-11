import './App.css'
import { ComplexNavbar } from './Components/ComplexNavbar/ComplexNavbar'
import { Outlet } from "react-router";

function App() {
  
  return (
    <>
    <ComplexNavbar></ComplexNavbar>
    <Outlet />
    </>
  )
}

export default App
