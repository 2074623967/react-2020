import React, { PureComponent } from 'react';

import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import About from './pages/about';
import Home from './pages/home';
import Profile from './pages/profile';

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={</Route>}}}></Route>
            <Route path="/about" component={About}></Route>
            <Route path="/profile" component={Profile}></Route>
          </Routes>
          <Link to="/">首页</Link>
          <Link to="/about">关于</Link>
          <Link to="/profile">我的</Link>
        </BrowserRouter>
      </div>
    );
  }
}
