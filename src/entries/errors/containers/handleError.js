import React, { Component } from 'react';
import ErrorContainer from '../component/ErrorContainer';

class HandleError extends Component {
  state={
    handleError:false,
  }
  componentDidCatch(error,info){
    this.setState({
      handleError: true
    })
  }
  render(){
    if(this.state.handleError){
      return <ErrorContainer/>
    }
    return this.props.children
  }
}
export default HandleError