import React from "react";

class Counter extends React.Component{
    constructor(props){
        super(props)
        this.state={
            counter:0
        }
    }
    handleClick=()=>{
            this.setState(({counter})=>({
                counter:counter+1
            }))
    }
    render(){
        if(this.state.counter===3){
            throw new Error('Manual error')
        }
        return(
           <>
           <h1>Counter </h1>
           <h3>{this.state.counter}</h3>
           <button onClick={this.handleClick.bind(this)}>Increment</button>
           </>
        )
    }
}
export default Counter;