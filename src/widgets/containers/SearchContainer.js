import React, {Component} from 'react'
import SearchLayout from '../components/SearchLayout'
import {connect} from 'react-redux'
import * as actions from '../../actions'
import {bindActionCreators} from 'redux'
class SearchContainer extends Component {
  state={
    value:''
  }
  handleSubmit = event =>{
    event.preventDefault()
    console.log(this.input.value, 'submit')
    this.props.actions.searchAsync(this.input.value)
  }
  setInputRef = element=>{
    this.input = element
  }
  handleInputChange = (ev)=>{
    this.setState({
      value: ev.target.value.replace(' ','-')
    })
  }

  render(){
    return(
        <SearchLayout 
        handleSubmit={this.handleSubmit}
        setRef={this.setInputRef}
        handleChange={this.handleInputChange}
        value={this.state.value}/>
    )
  }
}

const mapDispatchToProps = (dispatch)=>({
  actions: bindActionCreators(actions, dispatch)
})

export default connect(null, mapDispatchToProps)(SearchContainer)