import React from 'react';
import { NavLink } from 'react-router-dom';
import '../style/home.css';


const importAll = (requireContext) => requireContext.keys().map(requireContext);

const imagePath = importAll(
    require.context('../assets', true, /\.(png|jpe?g|svg)$/)
);


export default function Home(props) {
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

 