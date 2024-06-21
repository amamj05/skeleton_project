import React from 'react';


export default function Header(props) {
    let useImg = <img src={props.emoji} className='header-emoji' alt='useImg'></img>
    return (
        <div className='skeleton-header'>
            <input className='textInput'></input>
            {useImg}
        </div>
    )
}