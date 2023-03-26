import React, { PureComponent } from 'react'

import {BrowserRouter,Link,Route} from 'react-router-dom'

export default class App extends PureComponent {
  render() {
    return (
      <div>
      <BrowserRouter>
        <Link to="/">首页</Link>
        <Link to="/about">关于</Link>
        <Link to="/profile">我的</Link>
        <Route ></Route>
      </BrowserRouter>
      </div>
    )
  }
}
