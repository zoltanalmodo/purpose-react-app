import React from 'react';

import SearchResultText from '../SearchResultText/SearchResultText'
import searchresult_image from './purpose-group-searchresult.png'

export default function SearchResult() {
    return (
        <div className='SearchResultPassive' >
            <img src={searchresult_image}
                className="purpose-group-searchresult-image"
                alt="purpose-group-searchresult" />
            <SearchResultText />
        </div>
    )
}