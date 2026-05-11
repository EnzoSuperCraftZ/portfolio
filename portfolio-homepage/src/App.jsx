import { useState } from 'react'
import './App.css'
import Navbar from "./components/Navbar";
import Hero from "./components/hero";



function App() {
  const [count, setCount] = useState(0)

  return (
    <main className='app'>

      <Navbar />
      <section className="hero">
        <Hero />
      </section>
    </main>
  )
}

export default App
