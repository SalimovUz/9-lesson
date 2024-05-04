import React from 'react'
import Sidebar from '../Components/Sidebar'
import Atziv from '../Components/Atziv'

const Believe = () => {
  return (
    <div className='container mx-auto flex h-screen'>
      <Sidebar/>

      <div className='flex flex-col'>
        <Atziv/>
      </div>
    </div>
  )
}

export default Believe