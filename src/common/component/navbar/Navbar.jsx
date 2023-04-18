import React from "react";
import './Navbar.css'
import {useNavigate} from "react-router";
import {BrowserRouter} from "react-router-dom";

const UnwrappedNavbar = ({currentPage}) => {

    const navigate = useNavigate();

    return(
        <div className={'navbar-container'}>
            <nav>
                <li id={'match-statistics-button'} className={currentPage === "Match Statistics" ? 'navbar-active' : 'navbar-inactive'} onClick={() => navigate('/')}>Match Statistics</li>
                <li id={'player-statistics-button'} className={currentPage === "Player Statistics" ? 'navbar-active' : 'navbar-inactive'} onClick={() => navigate('/player-statistics')}>Player Statistics</li>
            </nav>
        </div>
    )

}

const Navbar = () => {
    return(
       // <BrowserRouter>
            <UnwrappedNavbar/>
       // </BrowserRouter>
    )
}

export default Navbar