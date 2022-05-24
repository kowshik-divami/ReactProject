// import { Component } from "react";

// class ClassStateExample extends Component{
//     state = {
//         name: 'a',
//         age: 0
//     }

//     updateName = () =>{
//         console.log('Entered into name event handler')
//         this.setState(prevState=>{
//             console.log('name updated')
//             return {name: prevState.name + 's'}
//         })
//     }

//     updateAge = () =>{
//         console.log('Entered into age event handler')
//         this.setState({age: 2})
//     }


//     render(){
//         const {name, age} = this.state
//         return(
//         <>
//             <p>{name}</p>
//             <button onClick={this.updateName}>update <br /> name</button>
//             <p>{age}</p>
//             <button onClick={this.updateAge}>update age</button>
//         </>
//         )
//     }
// }

import {useState} from 'react'

const ClassStateExample = () =>{
    const [name, setName] = useState('a')
    
    const updateName = ()=>{
        console.log('entered updateName1')
    }

    const updateName2 = () =>{
        console.log('entered updateName2')
        setName(prevState => {
        console.log('callback executed')
        return prevState + 's'
    })}

    return(
        <div>
            <p>{name}</p>
            <button onClick={updateName}>direct change</button>
            <button onClick={updateName2}>Callback change</button>
        </div>
    )
}


export default ClassStateExample