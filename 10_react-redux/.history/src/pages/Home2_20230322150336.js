import {connect} from '../utils/connect'

import { addAction } from '../store/actionCreators';

function Home(props){
    return (
      <div>
        <h1>Home</h1>
        <h2>当前计数: {props.counter}</h2>
        <button onClick={e => props.increment()}>+1</button>
        <button onClick={e => props.addNumber(5)}>+5</button>
      </div>
    )
}
const mapStateToProps=state=>{
  return {
   counter:state.counter
  }
}
const mapDispatchToProps=dispatch=>{
 return {
  decrement:function() {
    dispatch(subAction(1));
  },
  subNumber:function(num) {
    dispatch(subAction(num));
  }
}
}

export default connect(mapStateToProps,mapDispatchToProps)(About)
