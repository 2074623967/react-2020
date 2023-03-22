import React from 'react'

function About(props){
  
    return (
      <div>
        <h1>About</h1>
         <h2>当前计数: {props.counter}</h2>
        <button onClick={e => this.decrement()}>-1</button>
        <button onClick={e => this.subNumber(5)}>-5</button>
      </div>
    )
  }

}
