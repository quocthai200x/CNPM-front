import React from 'react'

function Navbar(props) {
    const {listLink,title} = props;
    return (
        <div className="navbar-fixed">
        <nav className="indigo accent-2 ">
            <div className="nav-wrapper container">
                <a href="#" className="brand-logo">{title}</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    { listLink.map(link=>{
                        return  <li key = {listLink.indexOf(link)}><a href= {link.link}>{link.name}</a></li>
                    })}
                </ul>
            </div>
        </nav>
    </div>
    )
}

export default Navbar
