import React from 'react'
import Sidebar from './Sidebar'
import Header from './Header'
import Status from './Status'
import Top from './Top'
import ActiveStatus from './ActiveStatus'
import ListDiscount from './ListDiscount'

const Container = () => {
  return (
    <div>
      <Sidebar/>

      <div className='flex flex-col'>
        <ListDiscount/>
      </div>
    </div>
  )
}

export default Container