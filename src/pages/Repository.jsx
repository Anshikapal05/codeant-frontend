import React from 'react'

import Navbar from '../components/Navbar/Navbar'
import Sidebar from '../components/Sidebar/Sidebar'
import RepositoryList from '../components/RepositoryList/RepositoryList'

export const Repository = () => {
  return (
    <div>
        <Navbar />
      <Sidebar />
      <RepositoryList />
    </div>
  )
}
