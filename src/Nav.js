import React from 'react';
import "./Nav.css";

function Nav() {
    return (
    <div className='nav'>
        <div className="nav__contents">
        <img 
        className="nav_logo"
        src="https://assets.cdn.moviepilot.de/files/603f0c884f66e18724692ef18ecc52e07e50986299ddb63253ede5670147/fill/1200/576/netflix%20logo.jpg" 
        alt=""
        />

        <img 
        className="nav_avatar"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" 
        alt=""
        />
        </div>
    </div>
    );
}

export default Nav;