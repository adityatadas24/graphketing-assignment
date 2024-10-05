import React from 'react'

const SearchBar = ({onSearch, searchInput}) => {
  return (
    <div  className='input'>
        <h2>Welcome, User!</h2>
        <input type="text" placeholder='Search name' className='input' value={searchInput} onChange={onSearch} />
    </div>
  )
}

export default SearchBar