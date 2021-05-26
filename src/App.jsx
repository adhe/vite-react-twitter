import React from 'react'
import { AppLayout } from './layouts/AppLayout'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { Nav } from './components/nav'
import Home from './views/Home'
import Search from './views/Search'
import Messages from './views/Messages'
import Notifications from './views/Notifications'

function App() {
  return (
    <AppLayout>
      <Router>
        <div className="flex-1">
          <Switch>
            <Route path="/notifications">
              <Notifications />
            </Route>
            <Route path="/search">
              <Search />
            </Route>
            <Route path="/messages">
              <Messages />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
        <Nav />
      </Router>
    </AppLayout>
  )
};

export default App;
