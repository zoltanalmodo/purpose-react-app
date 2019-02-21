import React from 'react';

export default function SelectorButton(props) {
    return (
        <div className='SelectorButton'
            // style={{backgroundColor:'red'}}
            onClick={ () => {props.onButtonSelected(props.name)} }>
            <h1>{props.name}</h1>
        </div>
    )
}