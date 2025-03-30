// import { useState } from 'react'
import NavlinkComponent from './NavlinkComponent'
import { useOutletContext } from 'react-router-dom'

export default function NavbarComponent() {

  const { user } = useOutletContext()
  console.log(user)

  return (
    <nav className='flex flex-col'>
      <h1 className="4xl bg-gray-800 text-white p-2">BANNERRRRRRR</h1>
      <div className='flex gap-4 p-3 bg-blue-200'>
        <div>
          <NavlinkComponent path="/">Home</NavlinkComponent>
          <NavlinkComponent path="/stats">Stats</NavlinkComponent>
        </div>
        <div>
        </div>
      </div>
    </nav>
  )
}
