import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import SearchBar from '../Search/SearchBar';
import homeIcon from '../../assets/home-icon.png';

const Header = () => {
    return (
        <header className="header">
            <div className="header-left">
                <Link to="/">
                    <img src={homeIcon} alt="Home" className="home-button" />
                </Link>
            </div>
            <div className="header-middle">
                <SearchBar />
            </div>
            <div className="header-right">
                <div className="profile-dropdown">
                    <button className="profile-button">Profile</button>
                    <div className="profile-dropdown-content">
                        <Link to="/login">Login</Link>
                        <Link to="/register">Register</Link>
                        <Link to="/profile">Profile Management</Link>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
