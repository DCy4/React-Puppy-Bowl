import { useState } from 'react'
import NavBar from './components/NavBar'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='app'>
        <div className='navbar'>
          <NavBar></NavBar>
        </div>
        <div className='main'>
        
        </div>
      </div>
    </>
  )
}

export default App
