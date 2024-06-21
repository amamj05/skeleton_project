import React from 'react';
import '../style/contents.css';
import trip from '../assets/trip.png';

export default function Trip(){
    return (
        <img src={trip} className='card-box' alt='trip' />
    )
}