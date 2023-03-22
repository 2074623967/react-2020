import React from 'react'

function About extends PureComponent {
  
    return (
      <div>
        <h1>About</h1>
         <h2>当前计数: {this.state.counter}</h2>
        <button onClick={e => this.decrement()}>-1</button>
        <button onClick={e => this.subNumber(5)}>-5</button>
      </div>
    )
  }

}
