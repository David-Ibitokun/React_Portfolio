import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navbar.jsx'
import Home from './pages/home.jsx'
import Footer from './components/footer.jsx'
import About from './pages/about.jsx'
import Contact from './pages/contact.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Home/>
      <About/>
      <Contact/>
      <Footer />
    </>
  )
}

export default App
