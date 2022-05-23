import {useState, useEffect} from 'react'

const UseEffectExample2 = () =>{
    const [windowSize, setWindowSize] = useState(window.innerWidth)

    useEffect(()=>{
        const handleResize = () =>{
            setWindowSize(window.innerWidth)
        }
        window.addEventListener('resize', handleResize)
        console.log('useEffect Executed')

        return ()=>{
            window.removeEventListener('resize', handleResize)
            console.log('resize event removed')
        }
    }, [])

    return(
        <div>
            <p>{windowSize}</p>
        </div>
    )
}

export default UseEffectExample2