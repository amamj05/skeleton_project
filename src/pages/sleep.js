import React from 'react';
import '../style/contents.css';
import sleep from '../assets/sleep.png';


export default function Sleep(){
    return (
        <img src={sleep} className='card-box' alt='sleep' />
    )
}