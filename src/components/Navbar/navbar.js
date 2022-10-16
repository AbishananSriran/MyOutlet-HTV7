import { Component } from 'react';
import './navbar.css'
import Logo from '../../assets/Logo.png'

class Navbar extends Component {

    render() {
        return (
          <nav className="navItems">
            <h1 className="navLogo">
                <img className="myOutlet" src={Logo} alt='Logo'/>
            </h1>
            <div className='options'>
              <h1 onClick={() => this.props.profileClickCheck(!this.props.currProfileClick)}>
                Profile
              </h1>
              <h1 onClick={() => this.props.settingsClickCheck(!this.props.currSettingsClick)}>
                Settings
              </h1>
            </div>
          </nav>
        )
    }
}

export default Navbar;