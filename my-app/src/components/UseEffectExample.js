import {useState, useEffect} from 'react'

const UseEffectExample = () =>{
    const [resourceType, setResourceType] = useState('posts')
    const [count, setCount] = useState(0)
    const [theme, setTheme] = useState('blue')
    const [items, setItems] = useState([])


    const decrementCount = () =>{
        setCount(prevState => prevState-1 )
        setTheme(prevState => prevState + 'x')
      }
    
    const incrementCount = () =>{
    setCount(prevState => setCount(prevState+1) )
    setTheme(prevState=>prevState+'y')
    }

    (()=>{
        console.log('render')
    })()

    useEffect(()=>{
        (async () => {
            console.log("Entered into useEffect")
            const response = await fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
            const data = await response.json()
            console.log(data)
            setItems(data)
        })()

        return ()=>{
            console.log("Return Executed.")
        }
    }, [resourceType])

    return(
        <div className='App'>
            <button onClick={() => setResourceType('posts')}>posts</button>
            <button onClick={() => setResourceType('comments')}>comments</button>
            <button onClick={() => setResourceType('albums')}>albums</button>
            <button onClick={() => setResourceType('users')}>users</button>
            <hr />
            <div className="App">
                <p>Count is {count} {theme}</p>
                <button onClick={decrementCount}>  -  </button>
                <button onClick={incrementCount}>  +  </button>
            </div>
            <h1>{resourceType}</h1>
            {items.map(eachItem=>(
                <pre>{JSON.stringify(eachItem)}</pre>
            ))}
        </div>
    )
}

export default UseEffectExample