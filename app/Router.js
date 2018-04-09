import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Index from './pages/Index';

export default class Root extends React.Component {
    render() {
        return (
            <Router>
                <Switch>

                    <Route path="/" component={Index}/>
                </Switch>
            </Router>
        )
    }
}

