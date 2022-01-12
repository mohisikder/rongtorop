import React, { Component } from 'react'
import Navigation from '../Shared/Navigation/Navigation'
import HeaderTop from './HeaderTop'

export class Header extends Component {
    render() {
        return (
            <div>
                <HeaderTop/>
                <Navigation/>
            </div>
        )
    }
}

export default Header
