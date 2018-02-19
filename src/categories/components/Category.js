import React from 'react'
import Playlist from '../../playlist/components/Playlist'
import '../../css/styles.css'

const Category = (props)=>{
  return(
    <div className='Category'>
      <h2 className='CategoryTitle'>{props.title}</h2>
      <p className='CategoryDescription'>{props.description}</p>
      <Playlist
        handleOpenModal = {props.handleOpenModal}
        playlist={props.playlist}/>
    </div>
  )
}
export default Category