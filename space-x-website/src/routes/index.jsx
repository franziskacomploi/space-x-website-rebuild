import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//Components
import NavBar from '../components/NavBar/NavBar';
import Home from '../pages/Home/Home';
import PastLaunches from '../pages/PastLaunches/PastLaunches';
import Rocket from '../pages/Rocket/Rocket';

const Routing = () => (
    <Router>
        <div className="general">
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="launches" element={<PastLaunches />} />
                <Route path="rocket/:rocketId" element={<Rocket />} />
            </Routes>
        </div>
    </Router>
);

export default Routing;
