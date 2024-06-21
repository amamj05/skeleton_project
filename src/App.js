import { Route, Routes  } from 'react-router-dom';
import { useState } from 'react';
import React from 'react';
import './main.css';
import Home from './pages/home';
import HomeList from './pages/homelist';
import Contents from './pages/contents';



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