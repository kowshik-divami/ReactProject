import {useState} from 'react'

const UseStateExample = () =>{
    const [count, setCount] = useState(0)
    const [theme, setTheme] = useState(() => {
        console.log("setting up theme state")
        return "blue"
    })
  
  const decrementCount = () =>{
    setCount(prevState => prevState-1 )
    setTheme(prevState => prevState + 'x')
  }

  const incrementCount = () =>{
    setCount(prevState => setCount(prevState+1) )
    setTheme(prevState=>prevState+'y')
  }
  return (
    <div className="App">
      <p>Count is {count} {theme}</p>
      <button onClick={decrementCount}>  -  </button>
      <button onClick={incrementCount}>  +  </button>
    </div>
  );
}

export default UseStateExample