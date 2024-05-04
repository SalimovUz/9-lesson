import React from 'react'
import Container from '../Components/Container'
import Sidebar from '../Components/Sidebar'
import Status from '../Components/YourComponent'
import YourComponent from '../Components/YourComponent'
import Header from '../Components/Header'

const Aksiya = () => {
  return (
    <div className='container mx-auto flex h-screen'>
      <Sidebar/>

      <div className='flex flex-col'>
        <Header/>
        <YourComponent/>
      </div>
    </div>
  )
}

export default Aksiya