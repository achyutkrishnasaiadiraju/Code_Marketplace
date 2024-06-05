import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import CodeDetail from './pages/CodeDetail';
import CodeUpload from './pages/CodeUpload';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import Collaboration from './pages/Collaboration';
import Documentation from './pages/Documentation';
import Subscription from './pages/Subscription';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import './App.css';

const App = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/code/:id" element={<CodeDetail />} />
                <Route path="/upload" element={<CodeUpload />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/collaboration" element={<Collaboration />} />
                <Route path="/documentation" element={<Documentation />} />
                <Route path="/subscription" element={<Subscription />} />
            </Routes>
            <Footer />
        </Router>
    );
};

export default App;
