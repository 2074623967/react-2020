function Home(props){
    return (
      <div>
        <h1>Home</h1>
        <h2>当前计数: {propscounter}</h2>
        <button onClick={e => props.increment()}>+1</button>
        <button onClick={e => props.addNumber(5)}>+5</button>
      </div>
    )
}
