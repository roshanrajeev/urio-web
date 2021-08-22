import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Contact from '../../pages/Contact/Contact'

import Home from '../../pages/Home/Home'
import NoMatch from '../../pages/NoMatch/NoMatch'

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/contact" component={Contact} />
                <Route path="*" component={NoMatch} />
            </Switch>
        </Router>
    )
}

export default App
