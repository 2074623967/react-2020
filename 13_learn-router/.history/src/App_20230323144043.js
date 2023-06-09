import React, { PureComponent } from 'react';

import { BrowserRouter, Link, Route } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import Profile from './pages/Profile';

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Link to="/">首页</Link>
          <Link to="/about">关于</Link>
          <Link to="/profile">我的</Link>
          <Routes></Routes>
          <Route exact path="/" component={Home}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/profile" component={Profile}></Route>
        </BrowserRouter>
      </div>
    );
  }
}
