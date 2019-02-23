import React from 'react';


export default function SearchResultText(props) {
    return (
        <div className='SearchResultText'>
        
            <h2>{props.title}</h2>
                <br></br>
            <h3>{props.type}</h3>
                <br></br>
            <p>{props.short_description}</p>
                <br></br>
            <p>{props.long_description}</p>

        </div>
    )
}