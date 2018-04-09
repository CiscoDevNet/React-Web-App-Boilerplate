import React from 'react';

import {NavLink} from 'react-router-dom'

export default class  extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"/>
                </button>

                <div className="collapse navbar-collapse" id="navbarsExampleDefault">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <NavLink to="/" className="nav-link" activeClassName='active' exact={true}>Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/album" className="nav-link"  activeClassName='active'>Album</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}




