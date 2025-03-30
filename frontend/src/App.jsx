// import { useState } from 'react'
import './App.css'

import { Outlet } from 'react-router-dom'
import NavbarComponent from '../components/NavbarComponent'
import { useState, useEffect } from 'react'

function App() {

  const [user, setUser] = useState(null)

  useEffect(() => {
    async function grabCurrentUser() {
      const response = await fetch(`http://localhost:8000/user/rokusho/kana`)
      const data = await response.json()
      console.log(data)
      setUser(data)
    }
    grabCurrentUser()
  }, [])


  return (
    <>
      <NavbarComponent />
      <Outlet context={{ user }}/>
    </>
  )
}

export default App
