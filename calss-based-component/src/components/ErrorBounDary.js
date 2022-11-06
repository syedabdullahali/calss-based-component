import { Component } from "react";

class ErrorBoundary extends Component{
 
constructor(props){
    super(props)
    this.state = {hasError:false}
}

    componentDidCatch(error){
        console.log(error)
        this.setState({hasError:true})
    }

    render(){
        if(this.state.hasError){
           return <p>SomeThing Went Wrong!</p>
        } 
          return this.props.children 

    }


}
export default ErrorBoundary