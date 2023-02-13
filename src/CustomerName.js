import React from "react";

class CustomerName extends React.Component{
    constructor(props){
        super(props)
        
    }

    render(){
        if(this.props.CustomerName==='Jhon'){
            throw new Error("Name not found",this.props.CustomerName)
        }
        return(
            <>
            <p>"CustomerName :{this.props.CustomerName}</p>
            </>
        )
    }
}

export default CustomerName