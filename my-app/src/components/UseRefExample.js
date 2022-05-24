import {useState, useEffect, useRef} from 'react'

const UseRefExample = () =>{
    const [name, setName] = useState('')
    const inputRef = useState('')


    const focus = () =>{
        inputRef.current.focus()
    }
}

export default UseRefExample