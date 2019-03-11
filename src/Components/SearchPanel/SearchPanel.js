import React from 'react';

import SearchInputForm from './SearcInputForm/SearcInputForm'
import searchpanel_image from './purpose-group-searchpanel.png'

export default function SearchPanel() {
    return (
        <div className='SearchPanel'>
            <SearchInputForm />
            <img src={searchpanel_image}
                className="purpose-group-searchpanel-image"
                alt="purpose-group-searchpanel" />
        </div>
    )
}