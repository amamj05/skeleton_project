import React from 'react';
import '../style/contents.css';
import test from '../assets/test.png';

export default function Test(){
    return (
        <img src={test} className='card-box' alt='test' />
    )
}