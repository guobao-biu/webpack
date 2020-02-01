import React from 'react'
import {Router, Route, Switch, Redirect} from 'react-router'
import {createHashHistory} from 'history'
const history = createHashHistory()

import Index from '../views/'
import Home from '../views/home'
import Detail from '../views/detail'

class RouterConfig extends React.Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path='/' exact component={Index}/>
                    <Route path='/home' component={Home}/>
                    <Route path='/detail' component={Detail}/>
                </Switch>
            </Router>
        )
    }
}
export default RouterConfig

