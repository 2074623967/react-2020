import React, { PureComponent } from 'react'

import {HashRouter,Link,Route} from 'react-router-dom'

export default class App extends PureComponent {
  render() {
    return (
      <div>
      <HashRouter>
        <Link to=>首页</Link>
        <Link>关于</Link>
        <Link>我的</Link>
      </HashRouter>
      </div>
    )
  }
}
