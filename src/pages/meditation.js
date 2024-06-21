import meditation from '../assets/meditation.jpg';
import React from 'react';
import '../style/contents.css';


export default function Meditation() {
    return (
        <div>
            <h1 className='contents-h1'>Meditation</h1>
            <img src={meditation} className='card-box' alt='meditation' />
            <article className='card-box'>
                <h2>1. 명상하기 좋은 음악 리스트</h2>
                <p>♡ 1,253 댓글 13</p>
            </article>
        </div>
    )
}