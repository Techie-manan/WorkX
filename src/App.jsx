import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar.jsx'
import Landing from './components/landing.jsx'
import AboutW from './components/aboutW.jsx'
import Services from './components/services.jsx'
import Footer from './components/footer.jsx'
import Tilts from './components/tilts.jsx'
import WhyW from './components/whyW.jsx'
import Review from './components/review.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App w-auto overflow-hidden">
      <Navbar />
      <Landing />
      <AboutW />
      <Tilts />
      <WhyW />
      <Services />
      <Review />
      <Footer />
      </div>
  )
}

export default App
