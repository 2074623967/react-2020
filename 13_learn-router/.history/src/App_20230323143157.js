import React, { PureComponent } from 'react'

import {HashRouter,Link,Route} from 'react-router-dom'

export default class App extends PureComponent {
  render() {
    return (
      <div>
      <HashRouter>
        <Link></Link>
        <Link></Link>
        <Link></Link>
      </HashRouter>
      </div>
    )
  }
}
