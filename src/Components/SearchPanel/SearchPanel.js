import React from 'react';

import SearchBar from '../SearcBar/SearcBar'
import searchpanel_image from './purpose-group-searchpanel.png'

export default function SearchPanel() {
    return (
        <div className='SearchPanel'>
            <SearchBar />
            <img src={searchpanel_image}
                className="purpose-group-searchpanel-image"
                alt="purpose-group-searchpanel" />
        </div>
    )
}