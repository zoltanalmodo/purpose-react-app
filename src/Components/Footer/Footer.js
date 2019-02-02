import React from 'react';

import footer_image from './purpose-group-footer.png'

export default function Footer() {
    return (
        <div className='Footer'>
            <img src={footer_image}
                className="purpose-group-footer-image"
                alt="purpose-group-footer" />
        </div>
    )
}