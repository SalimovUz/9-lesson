import React from 'react'
import Sidebar from './Sidebar'
import Header from './Header'
import ListDiscount from './ListDiscount'

const Container = () => {
  return (
    <div className='container mx-auto flex h-screen'>
      <Sidebar/>

      <div className='flex flex-col'>
        <Header/>
        <ListDiscount/>
      </div>
    </div>
  )
}

export default Container