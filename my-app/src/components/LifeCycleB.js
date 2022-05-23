import { Component } from "react";

class LifeCycelB extends Component{
    constructor(props){
        super(props)
        this.state = {name: 'kowshik'}
        console.log("Constructor Method  B")
    }

    static getDerivedStateFromProps(props, state){
        console.log("getDerivedStateFromProps  B")
        return null;
    }

    componentDidMount(){
        console.log("ComponentDidMount B")
    }

    shouldComponentUpdate(){
        console.log("ComponentDidUpdate B")
        return true
    }

    getSnapshotBeforeUpdate(){
        console.log("GetSnapshotBeforeUpdate B")
        return null
    }

    componentDidUpdate(){
        console.log("ComponentDidUpdate B")
    }

    render(){
        console.log('Render Method  B')
        return(
            <div>
                <p>LifeCycelB Component</p>
            </div>
        )
    }
}

export default LifeCycelB