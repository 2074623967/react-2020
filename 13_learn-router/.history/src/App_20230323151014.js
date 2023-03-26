import React, { PureComponent } from 'react';

import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
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
          {this.state.links.map((item, index) => {
            return (
               <div key={item.to} className={classNames={"active":index===this.state.currentIndex}}>
                <Link to={item.to} onClick={e=>{this.handleClick(index)}}>{item.title}</Link>;
               </div>
              )
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
  handleClick(index){
    this.setState{
    }
  }
}
