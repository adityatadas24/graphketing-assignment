import React from 'react'
import SearchBar from '../components/SearchBar'
import Filters from '../components/Filters'
import UserTable from '../components/UserTable'
import Paginations from '../components/Paginations'
import SideBar from '../components/SideBar'

const Dashboard = ({searchInput, onSearch,onFilter,users,paginate,totalUsers,usersPerPage}) => {
  return (
    <div style={{display:'flex'}}>
        <div className='side'>
        <SideBar/>

        </div>
        <div className='dashboard'>
       
              <SearchBar
                searchInput={searchInput}
                onSearch={onSearch}
              />
              <Filters onFilter={onFilter} />
              <UserTable users={users} />
              <Paginations
                usersPerPage={usersPerPage}
                totalUsers={totalUsers}
                paginate={paginate}
              />
        </div>
      
    </div>
  )
}

export default Dashboard
