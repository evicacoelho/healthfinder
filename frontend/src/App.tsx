import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import './App.css';
import MapWindow from './components/MapWindow/index.tsx'
import Navbar from './components/Navbar/index.tsx';
import Sidebar from './components/Sidebar/index.tsx';
import LoginPage from './components/LoginPage/index.tsx';
import SignUpPage from './components/SignUpPage/index.tsx';

function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/" element={
                        <div className='home-page'>
                            <Navbar />
                            <Sidebar />
                            <MapWindow />
                        </div>
                    } />
                </Routes>
                <Routes>
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/signup" element={<SignUpPage />} />
                </Routes>
            </Router> 
        </div>
    );
}

export default App;
