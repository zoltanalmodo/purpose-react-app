import React from 'react';


export default function SearchInputForm() {
    return (
        <div className='SearchInputForm'>
        
        <input type="text" placeholder="Search area or postcode.." name="search"/>
        <button type="submit">Search</button>

        </div>
    )
}