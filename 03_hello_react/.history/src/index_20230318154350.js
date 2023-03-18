import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component{
  constructor(){
  super();
  this.state={
  counter:0}
}
 render(){
  return (
   <div>
    <h2>当前计数: {this.state.counter}</h2>
     <button>+</button>
     <button>+</button>
   </div>
  )
}
}

ReactDOM.render(<App/>, document.getElementById('root'));
