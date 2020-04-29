import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { store } from '../store'
import { ConnectedDashBoard } from './Dashboard'
import { Router, Route } from 'react-router-dom';
import { history } from '../store/history'
import { ConnectedNavigation } from './Navigation'
import { ConnectedTaskDetail } from './TaskDetail'
import { Redirect } from 'react-router'
import { ConnectedLogin } from './Login';

const RouterGuard = Component => ({match}) => {
  console.info("RouterGuard:", match)
  if(!store.getState().session.authenticated) {
    return <Redirect to="/" />
  } else {
    return <Component match={match}/>
  }
}

export const Main = () => (
  <Router history={history}>
    <Provider store={store}>
      <div>
        <ConnectedNavigation/>
        <Route exact path="/" component={ConnectedLogin} />
        <Route
          exact
          path="/dashboard"
          render={RouterGuard(ConnectedDashBoard)}
        />
        <Route
          exact
          path="/task/:id"
          render={RouterGuard(ConnectedTaskDetail)}
        />
      </div>
    </Provider>
  </Router>
)