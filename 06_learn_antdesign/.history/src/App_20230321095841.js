import React, { PureComponent } from 'react';

export default class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isActive: true,
    };
  }
  render() {
    return (
      <div>
        <h2 className={'foo bar active title'}>我是标题1</h2>
        <h2 className={'title ' + (this.state.isActive ? 'active' : '')}>
          我是标题2
        </h2>
        <h2 className={['title' , (this.state.isActive ? 'active' : '')].join}>
          我是标题3
        </h2>
      </div>
    );
  }
}
