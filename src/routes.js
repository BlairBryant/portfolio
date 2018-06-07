import React from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom'
import Home from './Components/Home'

export default (
    <HashRouter>
        <Switch>
            <Route path='/' component={Home} exact />

        </Switch>
    </HashRouter>
)