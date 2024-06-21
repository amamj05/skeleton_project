import React from 'react';
import '../style/contents.css';
import nature from '../assets/nature.jpg';

export default function Nature() {
    return (
        <div>
            <h1 className='contents-h1'>Nature</h1>
            <img src={nature} className='card-box' alt='nature' />
            <article className='card-box'>
                <h2>1. 자연의 소리 - 시냇물</h2>
                <p>♡ 753 댓글 21</p>
            </article>
            <article className='card-box'>
                <h2>2. 자연의 소리 - 모닥불</h2>
                <p>♡ 173 댓글 7</p>
            </article>
        </div>
    )
}