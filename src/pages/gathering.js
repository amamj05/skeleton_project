import React from 'react';
import '../style/contents.css';
import gathering from '../assets/gathering.png';

export default function Gathering() {
    return (
        <div>
            <h1 className='contents-h1'>Gathering</h1>
            <img src={gathering} className='card-box' alt='gathering' />
            <article className='card-box'>
                <h2>1. 심리상담 프로그램</h2>
                <p>심리테스트 진행 및 솔루션 진행</p>
            </article>
        </div>
    )
}