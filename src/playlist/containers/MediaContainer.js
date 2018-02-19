import React, {Component} from 'react'
import Media from '../components/Media'
import {connect} from 'react-redux'
import * as actions from '../../actions'
import {bindActionCreators} from 'redux'

class MediaContainer extends Component{
  openModal = (id)=>{
    this.props.actions.openModal(id)
  }
  render(){
    return(
      <Media openModal={this.openModal}{...this.props.data.toJS()}/>
    )
  }
}
const mapsStateToProps = (state, props)=>({
  data: state.get('data').get('entities').get('media').get(props.id)
})

const mapDispatchToProps = (dispatch)=>({
  actions: bindActionCreators(actions, dispatch)
})
export default connect(mapsStateToProps, mapDispatchToProps)(MediaContainer)