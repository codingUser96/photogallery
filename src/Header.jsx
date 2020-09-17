import React, { Component, } from 'react'

class Header extends Component {
    constructor (props) {
        super(props)
        
        this.state = {
            
        }

    }

    render () {
    
        return (
            <div className="fx-l-header">
                <div className="fx-navbar fx-navbar--desktop">
                    <div className="fx-navbar-container">
                        <nav className="fx-navbar-links">
                        </nav>
                    </div>
                </div>
            </div>
        )
    }

}

export default Header;