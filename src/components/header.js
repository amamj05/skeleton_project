import React, { useState } from 'react';
import happiness from '../assets/face-emoji-happiness.png'


export default function Header(props) {
    
    let useImg = props.emoji ? <img src={props.emoji} className='header-emoji' alt='useImg'></img>
                            :<img src={happiness} className='header-emoji' alt='useImg'></img>;
    return (
        <div className='main-header'>
            {/* <input className='textInput'></input> */}
            <div className='textInput'>오늘의 기분</div>
            {useImg}
        </div>
    )
}