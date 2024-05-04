import React from 'react'
import Sidebar from './Sidebar'
import Header from './Header'
import Status from './Status'
import Top from './Top'
import ActiveStatus from './ActiveStatus'
import ListDiscount from './ListDiscount'

const Container = () => {
  return (
    <div className='container mx-auto flex h-screen'>
      <Sidebar/>

      <div className='flex flex-col'>
        {/* <ListDiscount/> */}
        <Status/>
      </div>
    </div>
  )
}

export default Container