import React from 'react';
import '../style/contents.css';
import { useParams } from 'react-router-dom';
import Header from '../components/header';
import Meditation from './meditation';
import Nature from './nature';
import Gathering from './gathering';
import Test from './test';
import Sleep from './sleep';
import Trip from './trip';



export default function Contents(props) {
    const program = [{ id: 1, class: "meditation", body: <Meditation></Meditation> },
    { id: 2, class: "nature", body: <Nature></Nature>},
    { id: 3, class: "gathering", body: <Gathering></Gathering>},
    { id: 4, class: "test", body: <Test></Test>},
    { id: 5, class: "sleep", body: <Sleep></Sleep>},
    { id: 6, class: "trip", body: <Trip></Trip>}
    ];
    const { num } = useParams();
    let lis = [];
    for (let i = 0; i < 6; i++) {
        if (Number(num) === program[i].id) {
            lis.push(<article key={i + 1}>{program[i].body}</article>);
        }
    }
    
    return (
        <div className='home-color'>
            <Header emoji={props.emoji}></Header>
            <div className='contents-box'>
                {lis}
            </div>
        </div>
    )
}