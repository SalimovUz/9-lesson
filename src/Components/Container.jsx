import React from 'react'
import Sidebar from './Sidebar'
import Header from './Header'
import Status from './Status'
import Top from './Top'
import ActiveStatus from './ActiveStatus'

const Container = () => {
  return (
    <div>
      <Sidebar/>

      <div className='flex flex-col'>
        <Header/>
        <Top/>
        <Status/>
        <ActiveStatus/>
      </div>
    </div>
  )
}

export default Container