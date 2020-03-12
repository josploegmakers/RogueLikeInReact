import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import layouttest from './comp/layouttest';

class Main extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Switch>
                        <Route exact path='/' component={layouttest} />
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default Main;