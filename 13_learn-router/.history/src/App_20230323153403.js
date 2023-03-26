import React, { PureComponent } from 'react';

import { BrowserRouter, Link, Route, Routes, NavLink } from 'react-router-dom';
import classNames from 'classnames';
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
          {/* {this.state.links.map((item, index) => {
            return (
              <div
                key={item.to}
                className={classNames({
                  active: index === this.state.currentIndex,
                })}
              >
                <Link
                  to={item.to}
                  onClick={e => {
                    this.handleClick(index);
                  }}
                >
                  {item.title}
                </Link>
                ;
              </div>
            );
          })} */}
          <NavLink exact to="/" acst>首页</NavLink>
          <NavLink to="/about">关于</NavLink>
          <NavLink to="/profile">我的</NavLink>
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/profile" element={<Profile />}></Route>
          </Routes>
          {/* <Link to="/">首页</Link>
          <Link to="/about">关于</Link>
          <Link to="/profile">我的</Link> */}
        </BrowserRouter>
      </div>
    );
  }
  handleClick(index) {
    this.setState({
      currentIndex: index,
    });
  }
}
