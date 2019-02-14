import React from 'react';


export default function SearchBar() {
    return (
        <div className='SearchBar'>
        
        <input type="text" placeholder="Search area or postcode.." name="search"/>
        <button type="submit">Search</button>

        </div>
    )
}