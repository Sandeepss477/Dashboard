import React from 'react'
import './App.css'
import Sidebar from './Components/SideBar Section/Sidebar'
import Body from './Components/Body Section/Body'
<meta name="viewport" content="width=device-width, initial-scale=1.0" />


const App = () => {
  return (
    <div className='container'>
        <Sidebar/>
        <Body/>

    </div>
  )
}

export default App