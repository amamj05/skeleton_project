import React from 'react';
import '../style/contents.css';
import { useParams } from 'react-router-dom';
import Header from '../components/header';
import meditation from '../assets/meditation.jpg';
import nature from '../assets/nature.jpg';
import gathering from '../assets/gathering.png';
import test from '../assets/test.png';
import sleep from '../assets/sleep.png';
import trip from '../assets/trip.png';


export default function Contents(props) {
    const program = [{ id: 1, class: "meditation", img: <img src={meditation} className='card-box' /> },
    { id: 2, class: "nature", img: <img src={nature} className='card-box' /> },
    { id: 3, class: "gathering", img: <img src={gathering} className='card-box' /> },
    { id: 4, class: "test", img: <img src={test} className='card-box' /> },
    { id: 5, class: "sleep", img: <img src={sleep} className='card-box' /> },
    { id: 6, class: "trip", img: <img src={trip} className='card-box' /> }
    ];
    const { num } = useParams();
    let lis = [];
    for (let i = 0; i < 6; i++) {
        if (num == program[i].id) {
            lis.push(<article key={i + 1}>{program[i].img}</article>);
        }
    }

    return (
        <div>
            <Header emoji={props.emoji}></Header>
            <div className='contents-box'>
                {lis}
            </div>
        </div>
    )
}