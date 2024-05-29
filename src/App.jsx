import { useState } from 'react'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navigation/>
      <Hero/>
      <Footer/>
    </>
  )
}

export default App
