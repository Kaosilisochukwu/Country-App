import React from 'react'

const Header = ({handleHeaderClick}) => {
    return (
        <div className="header-container">
            <div className="header">
                <div className="title">Where in the world?</div>
                <div className="icon"></div>
            </div>
            <div onClick={handleHeaderClick} className="dark-mode-toggle"><i className="fas fa-moon"></i>Dark Mode</div>
        </div>
    )
}

export default Header
