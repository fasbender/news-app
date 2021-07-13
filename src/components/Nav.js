import React from 'react'
import SideBar from './SideBar'
import './nav.css'

const Nav = ({ setCategory }) => {
    return (
        <div className="nav">
            <div className="menu-logo">
                <SideBar setCategory={setCategory}/>
            </div>
            <div className="main-logo">
                <img src={process.env.PUBLIC_URL + '/images/planet.png'} alt="daily-planet" width="120px"/>
            </div>
        </div>
    )
}

export default Nav
