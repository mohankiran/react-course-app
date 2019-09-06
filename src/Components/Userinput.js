import React, { Component } from 'react';
import '../App.css'
import Useroutput from './Useroutput';


export default class Userinput extends Component {
    constructor(){
        super()
        
    }
   
    state = {
        username: "Jhon"
    }
    changeHandler = (event) => {
        this.setState({username: event.target.value})
    }
    clickHandler = () => {
        this.setState({username: "Mohan Kiran 39"})
    }
    render(){
        return(
            <div className="App">
                <label>User name: </label>
                <input className="form-control" type="text" onChange={this.changeHandler}  value={this.state.username}/> <hr/>
                <Useroutput click={this.clickHandler} name={this.state.username} />
            </div>
        )
    }
}