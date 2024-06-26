import React from 'react';
import '../style/homelist.css';
import { NavLink } from 'react-router-dom';
import Header from '../components/header';
import meditation from '../assets/meditation.jpg';
import nature from '../assets/nature.jpg';
import gathering from '../assets/gathering.png';
import test from '../assets/test.png';
import sleep from '../assets/sleep.png';
import trip from '../assets/trip.png';


export default function HomeList(props) {
    const program = [
        {   id: 1, 
            class: "Meditation",
            info: "Mind and Body Rest",
            img: <img src={meditation} className='contentsbox-list' alt='meditation' /> },
        {   id: 2, 
            class: "Nature",
            info: "INNER PEACE by the sound of nature",
            img: <img src={nature} className='contentsbox-list' alt='nature' /> },
        {   id: 3, 
            class: "Gathering",
            info: "Psychological Programs With People",
            img: <img src={gathering} className='contentsbox-list' alt='gathering' /> },
        {   id: 4, 
            class: "Test",
            info: "Depression Test",
            img: <img src={test} className='contentsbox-list' alt='test' /> },
        {   id: 5, 
            class: "Sleep",
            info: "For the Best Sleep",
            img: <img src={sleep} className='contentsbox-list' alt='sleep' /> },
        {   id: 6, 
            class: "Trip",
            info: "My Own New Enjoy Thing",
            img: <img src={trip} className='contentsbox-list' alt='trip' /> }];
            
    let lis = [];

    for (let i = 1; i < 7; i++) {
        lis.push(<li key={i}><NavLink to={"/contentslist/" + i}>{program[i - 1].img}
            <h2>{program[i - 1].class}</h2></NavLink><p>{program[i - 1].info}</p></li>);
    }

    return (
        <div className='home-color'>
            <Header emoji={props.emoji}></Header>
            <div className='homelist'>
                {lis}
            </div>
        </div>
    )
}