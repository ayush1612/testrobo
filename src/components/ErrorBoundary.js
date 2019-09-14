import React, { Component } from 'react';

class ErrorBoundary extends Component{

    constructor(props){
        super(props);
        this.state = {
            hasError:false
        }
    }

    //this was added to the lifecycle from React 16 and it is like a try and catch block
    componentDidCatch(error,info){
        this.setState({ hasError:true })
    }


    render(){

        if(this.state.hasError){
            return <h1>Ooops. Didn't see that coming!!</h1>
        }
        return this.props.children
    }

}

export default ErrorBoundary;