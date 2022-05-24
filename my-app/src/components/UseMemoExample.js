import {useState, useMemo, useEffect} from 'react'

const UseMemoExample = () =>{
    const [num, setNum] = useState(0)
    const [dark, setDark] = useState(false)
    const doubleNumber = useMemo(() => slowfn(num), [num])

    function slowfn(num){
        console.log('Entered slow fn')
        for (let i = 0; i < 1000000000; i++){}
        return num*2
    }

    const themeStyles = useMemo(() => ({
        backgroundColor: dark ? 'black' : 'white',
        color: dark ? 'white' : 'black'
    }), [dark])

    useEffect(()=>{
        console.log("theme changed")
    }, [themeStyles])
    
    return(
        <div>
            <input type='number' value={num} onChange={e=>setNum(parseInt(e.target.value))} />
            <button onClick={()=>setDark(prevState=>!prevState)}>Change Theme</button>
            <div style={themeStyles}>{doubleNumber}</div>
        </div>
    )
}

export default UseMemoExample