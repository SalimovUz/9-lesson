import React from 'react'
import Sidebar from '../Components/Sidebar'
import Atziv from '../Components/Atziv'
import Header from '../Components/Header'

const Believe = () => {
  return (
    <div className='container mx-auto flex h-screen'>
      <Sidebar/>

      <div className='flex flex-col'>
        <Header/>
        <Atziv/>
      </div>
    </div>
  )
}

export default Believe