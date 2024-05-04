import React from 'react'
import Container from '../Components/Container'
import Sidebar from '../Components/Sidebar'
import Status from '../Components/Status'

const Aksiya = () => {
  return (
    <div className='container mx-auto flex h-screen'>
      <Sidebar/>

      <div className='flex flex-col'>
        <Status/>
      </div>
    </div>
  )
}

export default Aksiya