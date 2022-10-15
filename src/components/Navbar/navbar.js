import { Component } from 'react';
import { MenuItems } from './MenuItems';
import './navbar.css'

class Navbar extends Component {

    render() {
        return (
          <nav className="navItems">
            <h1 className="navLogo">
                <i className="fa-solid fa-battery fa-xl">
                </i>
            </h1>
            <div className='options'>
                {MenuItems.map((item, index) => {
                    return(
                      <h1 className='item.cName'>
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