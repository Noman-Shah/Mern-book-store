import './App.css'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import MyFooter from './pages/home/MyFooter'

function App() {

  return (
    <>
      <Navbar />
      <div className=' min-h-screen'>
      <Outlet />
      </div>
      <MyFooter />

    </>
  )
}

export default App
