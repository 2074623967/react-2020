import {connect} from '../utils/connect'

function About(props){
    return (
      <div>
        <h1>About</h1>
         <h2>当前计数: {props.counter}</h2>
        <button onClick={e =>props.decrement()}>-1</button>
        <button onClick={e => props.subNumber(5)}>-5</button>
      </div>
    )
  }
  const mapStateToProps=''
  const mapDispatchToProps=''
 connect(mapStateToProps,mapDispatchToProps)(About)