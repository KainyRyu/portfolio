import React from 'react';
import stars from './images/stars.jpg'
import './frontend/App.css';

export default function Main () {
    return(
        <div>
            <section>
                <div className='background'>
                    <div className='bg' data-module="ImageFit">
                        <img className='bgimg' src={stars} alt='mexity' data-screenratio="1.3" data-aspectratio="1x2, 4000x4000"/>
                    </div>
                </div>
            </section>
        </div>
    )
}