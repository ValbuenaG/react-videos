import React from 'react'

const Modal = (props)=>{
  return(
    <div className='Modal'>
      esto es un modal(?)
      {props.children}
      <button className='ModalClose' onClick={props.handleClick}/>
    </div>
  )
}
export default Modal