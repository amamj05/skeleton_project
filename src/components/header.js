import React, { useState } from 'react';
import happiness from '../assets/face-emoji-happiness.png'


export default function Header(props) {
    
    let useImg = props.emoji ? <img src={props.emoji} className='header-emoji' alt='useImg'></img>
                            :<img src={happiness} className='header-emoji' alt='useImg'></img>;
    return (
        <div className='main-header'>
            {/* <input className='textInput'></input> */}
            <div className='textInput'>"Success is not final, failure is not fatal: 
                It is the courage to continue that counts."
            </div>
            {useImg}
        </div>
    )
}