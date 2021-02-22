import React, { Component } from 'react'
import Sublifecycle from './Sublifecycle'

export default class Lifecycle extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             makanan: "Bakso",
             data : {},
             tampilSub: false,
        }
    }

    // ComponentDidMount

    componentDidMount() {
        // fetch('https://jsonplaceholder.typicode.com/todos/1')
        fetch('https://dev.farizdotid.com/api/daerahindonesia/kelurahan/9403220011')
        // .then(response => response.json())
        .then(response => response.json())
        .then(json => {
            this.setState({
                data : json
            })
        })
    }

    ubahMakanan(value) {
        this.setState({
            makanan:value
        })
    }
    
    render() {
        // console.log("Data", this.state.data); 
        return (
            <div>
                <h2>{this.state.makanan}</h2>

                {this.state.tampilSub && <Sublifecycle ubahMakanan={(value) => this.ubahMakanan(value)}/>}

                <button onClick={() => this.setState({tampilSub: !this.state.tampilSub})}>Button</button>
            </div>
        )
    }
}
