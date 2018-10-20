// @flow
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { HashRouter as Router, Route, Switch, Redirect, Link } from 'react-router-dom';
import VideoSelectScreen from './screens/VideoSelectScreen';
import ConvertScreen from './screens/ConvertScreen';

export default class Root extends Component<Props> {
  render() {
    const { store, history } = this.props;
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
        <Router>
          <div className="app">
            <Switch>
              <Route path="/convert" component={ConvertScreen} />
              <Route path="/" component={VideoSelectScreen} />
            </Switch>
          </div>
        </Router>
        </ConnectedRouter>
      </Provider>
    );
  }
}
