import React, { useState } from 'react'
import './index.css'
import {useNavigate} from 'react-router-dom'
function SearchBar() {
    const [term, setTerm] = useState('')
    const navigate = useNavigate()
    const search = (e) => {
e.preventDefault();

        navigate(`/search?q=${term}`)
    }
  return (
    <div className='searchBar'>
        <form onSubmit={search}>
            <label htmlFor='search'>Search:</label>
            <input 
            type='text' 
            id="search" 
            required
            onChange={(e) => setTerm(e.target.value)}/>
        </form>
    </div>
  )
}

export default SearchBar