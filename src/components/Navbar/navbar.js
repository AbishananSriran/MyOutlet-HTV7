import { Component } from 'react';
import { MenuItems } from './MenuItems';
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
                {MenuItems.map((item, index) => {
                    return(
                      <h1 className='item.cName' onClick={() => this.props.clickCheck(!this.props.currClick)}>
                        {item.title}
                      </h1>
                    )
                })}
            </div>
          </nav>
        )
    }
}

export default Navbar;