import React, { PureComponent } from 'react';

import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import About from './pages/about';
import Home from './pages/home';
import Profile from './pages/profile';

export default class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      links: [{ to: '/', title: '首页' }],
      links: [{ to: '/', title: '' }],
      links: [{ to: '/', title: '首页' }],
    };
  }
  render() {
    return (
      <div>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/profile" element={<Profile />}></Route>
          </Routes>
          <Link to="/">首页</Link>
          <Link to="/about">关于</Link>
          <Link to="/profile">我的</Link>
        </BrowserRouter>
      </div>
    );
  }
}
