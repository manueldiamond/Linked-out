import React from 'react'
import Header from './Header'
import Credits from './Credits'
import Sidebar from './Sidebar'
import './App.css'

const App = () => {
  return (
    <div className='app bg-light'>
      <Header />
      
      <div className='app__body'>
        <Sidebar />
      </div>

      <Credits />
    </div>
  )
}

export default App