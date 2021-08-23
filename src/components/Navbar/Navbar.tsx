import React from 'react'
import { Link } from 'react-router-dom'

import './Navbar.scss'
import Logo from '../../assets/images/icons/logo.png'
import MenuIcon from '../../assets/images/icons/menu_icon.svg'

type NavbarProps = {}

type State = {
    navActive: boolean
}

class Navbar extends React.Component<NavbarProps, State> {
    state = {
        navActive: false,
    }

    handleClick = () => {
        this.setState((prev) => {
            return { ...prev, navActive: !prev.navActive }
        })
    }

    render() {
        return (
            <div className="Navbar">
                <Link to="/" className="Navbar__logo-link">
                    <img src={Logo} className="Navbar__logo" alt="logo" />
                </Link>
                <button className="Navbar__toggler" onClick={this.handleClick}>
                    <img src={MenuIcon} className="Navbar__toggler-icon" alt="menu" />
                </button>
                <ul className={this.state.navActive ? 'Navbar__nav' : 'Navbar__nav Navbar__nav--collapsed'}>
                    <li className="Navbar__item">
                        <Link to="/" className="Navbar__item-link">
                            Home
                        </Link>
                    </li>
                    <li className="Navbar__item">
                        <Link to="/contact" className="Navbar__item-link">
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Navbar
