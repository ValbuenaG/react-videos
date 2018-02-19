import React, {Component} from 'react'
import {createPortal} from 'react-dom'

class ModalContainer extends Component{
  render(){
    const modalContainer = document.getElementById('modal-container')
    return(
      createPortal(this.props.children,modalContainer )
    )
  }
}

export default ModalContainer