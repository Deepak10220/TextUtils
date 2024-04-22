import { useState } from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import './App.css'
import Home from './Screen/Home'
import About from './Screen/About'
import Contact from './Screen/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/AboutUs" element={<About/>}></Route>
      <Route path="/Contact" element={<Contact/>}></Route>
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
