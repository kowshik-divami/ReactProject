import {Component} from 'react'

import LifeCycelB from './LifeCycleB'

class LifeCycleA extends Component{
    constructor(props){
        super(props)
        this.state = {name: 'kowshik'}
        console.log("Constructor Method A")
    }

    static getDerivedStateFromProps(props, state){
        console.log("getDerivedStateFromProps A")
        return null;
    }

    componentDidMount(){
        console.log("ComponentDidMount A")
    }

    shouldComponentUpdate(){
        console.log("ShouldComponentUpdate A")
        return true
    }

    getSnapshotBeforeUpdate(){
        console.log("GetSnapshotBeforeUpdate A")
        return null
    }

    componentDidUpdate(){
        console.log("ComponentDidUpdate A")
    }

    changeState = () =>{
        this.setState({name: "vamsi"})
    }

    render(){
        console.log('Render Method A')
        return(
            <div>
                <p>LifeCycelA Component</p>
                <LifeCycelB />
                <button onClick={this.changeState}>Change State</button>
            </div>
        )
    }
}

export default LifeCycleA