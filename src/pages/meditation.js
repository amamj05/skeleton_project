import meditation from '../assets/meditation.jpg';
import React from 'react';
import '../style/contents.css';


export default function Meditation(){
    return (
        <img src={meditation} className='card-box' alt='meditation' />
    )
}