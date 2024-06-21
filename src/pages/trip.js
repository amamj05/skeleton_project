import React from 'react';
import '../style/contents.css';
import trip from '../assets/trip.png';

export default function Trip() {
    return (
        <div>
            <h1 className='contents-h1'>Trip</h1>
            <img src={trip} className='card-box' alt='trip' />
            <article className='card-box'>
                <h2>1. 추운 나라에서 느끼는 따듯함</h2>
                <p>♡ 753 댓글 74</p>
            </article>
            <article className='card-box'>
                <h2>2. 내 주변 숨어있는 힐링 명소</h2>
                <p>♡ 53 댓글 7</p>
            </article>
        </div>
    )
}