import React from 'react'
import { AppLayout, AppLayoutDefault } from './layouts/AppLayout'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { Nav } from './components/nav'
import Home from './views/Home'
import Search from './views/Search'
import Profile from './views/Profile'
import Messages from './views/Messages'
import Notifications from './views/Notifications'

function App() {
  return (
    <AppLayout>
      <Router>
        <div className="flex-1">
          <Switch>
            <Route path="/notifications">
              <AppLayoutDefault label="Notifications">
                <Notifications />
              </AppLayoutDefault>
            </Route>
            <Route path="/search">
              <Search />
            </Route>
            <Route path="/messages">
              <AppLayoutDefault label="Messages">
                <Messages />
              </AppLayoutDefault>
            </Route>
            <Route path="/profile">
              <AppLayoutDefault label="adhecakson">
                <Profile />
              </AppLayoutDefault>
            </Route>
            <Route path="/">
              <AppLayoutDefault label="Home">
                <Home />
              </AppLayoutDefault>
            </Route>
          </Switch>
        </div>
        <Nav />
      </Router>
    </AppLayout>
  )
};

export default App;
