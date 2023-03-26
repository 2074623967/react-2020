import React, { PureComponent } from 'react';

import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import About from './pages/about';
import Home from './pages/home';
import Profile from './pages/profile';

export default class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      links: [
        { to: '/', title: '首页' },
        { to: '/about', title: '关于' },
        { to: '/profile', title: '我的' },
      ],
      currentIndex: 0,
    };
  }
  render() {
    return (
      <div>
        <BrowserRouter>
          {this.state.links.map((item, index) => {
            return 
          })}
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
