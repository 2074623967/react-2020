

import React,{Component} from 'react';


exclass App extends Component{
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
     <button>-</button>
   </div>
  )
}
}