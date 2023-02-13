import React, { Component } from "react";

class Errorboundaries extends React.Component{
    constructor(props){
        super(props)
        this.state={
            hasError : false,
        }
    }

    static getDerivedStateFromError(){
        return{ hasError:true }
    }
    render(){
        if(this.state.hasError){
            return <>
            Error caught and handled
            <h4>Displayed fallback UI</h4>
            </>
        }
        return(this.props.children)
        
    }
}
export default Errorboundaries