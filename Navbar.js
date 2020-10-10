import React from 'react'
import GitHubIcon from '@material-ui/icons/GitHub';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import { Link } from "react-router-dom";

function Navbar({ icon, title }) {
    return (
        <div>
            <nav className='navbar bg-primary'>
                <Link to='/'>
                    <HomeRoundedIcon />
                </Link>

                <h2>{title}</h2>
                <Link to='/about  '>
                    <GitHubIcon className={icon} />
                </Link>

            </nav>
        </div>
    )
}


export default Navbar
