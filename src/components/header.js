import React from 'react';
import happiness from '../assets/face-emoji-happiness.png';
import home from '../assets/home.png';
import { NavLink } from 'react-router-dom';


export default function Header(props) {
    
    let useImg = props.emoji ? <img src={props.emoji} className='header-emoji' alt='useImg'></img>
                            :<img src={happiness} className='header-emoji' alt='useImg'></img>;
    return (
        <div className='main-header'>
            <div className='textInput'>"Success is not final, failure is not fatal: 
                It is the courage to continue that counts."
            </div>
            {useImg}
            <NavLink to={"/"}><img src={home} className='header-home' alt='home'></img></NavLink>
        </div>
    )
}