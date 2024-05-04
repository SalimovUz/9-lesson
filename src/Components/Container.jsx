import React from 'react'
import Sidebar from './Sidebar'
import Header from './Header'
import YourComponent from './YourComponent'

const Container = () => {
  return (
    <div className='container mx-auto flex h-screen'>
      <Sidebar/>

      <div className='flex flex-col'>
        {/* <ListDiscount/> */}
        <YourComponent/>
      </div>
    </div>
  )
}

export default Container