import { Route, Routes, NavLink, useParams } from 'react-router-dom';
import { useState } from 'react';
import React from 'react';
import './Skeleton.css';
import meditation from './img/meditation.jpg';
import nature from './img/nature.jpg';
import gathering from './img/gathering.png';
import test from './img/test.png';
import sleep from './img/sleep.png';
import trip from './img/trip.png';


const importAll = (requireContext) => requireContext.keys().map(requireContext);

const imagePath = importAll(
    require.context('./img', true, /\.(png|jpe?g|svg)$/)
);



function Home(props) {
    let lis = [];

    for (let i = 0; i < imagePath.length; i++) {
        if (imagePath[i].substr(14, 10) === 'face-emoji') {

            lis.push(<li key={i}><NavLink to="/homelist" >
                <img src={imagePath[i]} id={i} className='home-emoji' onClick={() => {
                    props.setEmoji(imagePath[i]);
                }}></img>
            </NavLink></li>)
        }
    }


    return (
        <div className='skeleton-home'>
            <h1>오늘의 기분을 골라주세요</h1>
            <div className='emoji-box'>
                <ul className='no-dot'>
                    {lis}
                </ul>
            </div>
        </div>
    )
}

function Header(props) {




    let useImg = <img src={props.emoji} className='header-emoji'></img>
    return (
        <div className='skeleton-header'>
            <input className='textInput'></input>
            {useImg}
        </div>
    )
}



function HomeList(props) {
    const program = [{ id: 1, class: "meditation", img: <img src={meditation} className='contentsbox-list' /> },
    { id: 2, class: "nature", img: <img src={nature} className='contentsbox-list' /> },
    { id: 3, class: "gathering", img: <img src={gathering} className='contentsbox-list' /> },
    { id: 4, class: "test", img: <img src={test} className='contentsbox-list' /> },
    { id: 5, class: "sleep", img: <img src={sleep} className='contentsbox-list' /> },
    { id: 6, class: "trip", img: <img src={trip} className='contentsbox-list' /> }
    ];


    let lis = [];
    for (let i = 1; i < 7; i++) {
        lis.push(<li key={i}><NavLink to={"/contentslist/" + i}>{program[i - 1].img}</NavLink></li>);
    }
    console.log(props.id);
    return (
        <div>
            <Header emoji={props.emoji}></Header>
            <div className='skeleton-homelist'>
                {lis}
            </div>
        </div>
    )
}

function Contents(props) {
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

function App() {
    const [Emoji, setEmoji] = useState(null);

    return (
        <div >
            <Routes>
                <Route path='/' element={<Home setEmoji={setEmoji} />}></Route>
                <Route path='/homelist' element={<HomeList emoji={Emoji} />}></Route>
                <Route path='/contentslist/:num' element={<Contents emoji={Emoji} />}></Route>
            </Routes>
        </div>


    )
}


export default App;