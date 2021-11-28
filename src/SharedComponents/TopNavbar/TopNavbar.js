import React, { useState } from 'react';
import logo from './../../assets/logo.svg';
import { Link } from 'react-router-dom';
import './TopNavbar.css';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const TopNavbar = () => {
    const [click, setClick] = useState(false);

    const handleCilick = () => setClick(!click);


    return (
        <div className="top-navbar">
            <div className="logo-div">
                <Link to="/" className="logo-link">
                    <img src={logo} alt="space ex logo" />
                </Link>
            </div>

            <button 
                className="mobile-nav-toggle" 
                aria-controls="primary-navigation" 
                aria-expanded={ click ? "true" : "false"}
                onClick={handleCilick}
            >
                {
                    click ? <CloseIcon></CloseIcon> : <MenuIcon></MenuIcon>
                }
                
            </button>

            <nav>
                <ul 
                    id="primary-navigation" 
                    className={click ? "primary-navigation show" : "primary-navigation"}
                >
                    <li>
                        <Link to="/" className="active navlink">
                            <span aria-hidden="true">00</span> Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/destination" className="navlink">
                            <span aria-hidden="true">01</span> Destination
                        </Link>
                    </li>
                    <li>
                        <Link to="/crew" className="navlink">
                            <span aria-hidden="true">02</span> Crew
                        </Link>
                    </li>
                    <li>
                        <Link to="/technology" className="navlink">
                            <span aria-hidden="true">03</span> Technology
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default TopNavbar;