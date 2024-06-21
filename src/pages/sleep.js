import React from 'react';
import '../style/contents.css';
import sleep from '../assets/sleep.png';


export default function Sleep() {
    return (
        <div>
            <h1 className='contents-h1'>Sleep</h1>
            <img src={sleep} className='card-box' alt='sleep' />
            <article className='card-box'>
                <h2>1. 수면 유도</h2>
                <p>♡ 2,253 댓글 113</p>
            </article>
            <article className='card-box'>
                <h2>2. 좋은 잠이란 - 저자 : ○○○</h2>
                <p>♡ 73 댓글 9</p>
            </article>
        </div>
    )
}