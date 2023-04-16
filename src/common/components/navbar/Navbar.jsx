import React from "react";
import './Navbar.css'
import {useNavigate} from "react-router";
const Navbar = ({currentPage}) => {

    const navigate = useNavigate();

    return(
        <div className={'navbar-container'}>
            <nav>
                <li className={currentPage === "Match Statistics" ? 'navbar-active' : 'navbar-inactive'} onClick={() => navigate('/')}>Match Statistics</li>
                <li className={currentPage === "Player Statistics" ? 'navbar-active' : 'navbar-inactive'} onClick={() => navigate('/player-statistics')}>Player Statistics</li>
            </nav>
        </div>
    )

}

export default Navbar