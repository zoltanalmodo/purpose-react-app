import React from 'react';

export default function SearchResultImage(props) {
    return <img
        src = {props.searchresult_image}
        className = "purpose-group-searchresult-image"
        alt = {props.searchresult_image}
    />;
}