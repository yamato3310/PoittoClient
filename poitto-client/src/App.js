import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Main from './components/postIt/Main';
import Top from './components/top/Top';

export default class App extends React.Component {
  render() {
    return (
        <BrowserRouter>
          <div>
            <Switch>
              <Route exact path={'/'} component={Top}/>
              <Route path={'/postIt'} component={Main}/>
            </Switch>
          </div>
        </BrowserRouter>
    )
  }
}