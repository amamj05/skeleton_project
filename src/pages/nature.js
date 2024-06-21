import React from 'react';
import '../style/contents.css';
import nature from '../assets/nature.jpg';

export default function Nature(){
    return (
        <img src={nature} className='card-box' alt='nature' />
    )
}