import React from 'react';
import '../style/contents.css';
import test from '../assets/test.png';

export default function Test() {
    return (
        <div>
            <h1 className='contents-h1'>Test</h1>
            <img src={test} className='card-box' alt='test' />
            <article className='card-box'>
                <h2>1. 우울증 테스트</h2>
                <p>♡ 153 댓글 313</p>
            </article>
            <article className='card-box'>
                <h2>2. 무기력 위험 신호 파악하기</h2>
                <p>♡ 63 댓글 22</p>
            </article>
        </div>
    )
}