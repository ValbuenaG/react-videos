import React, {Component} from 'react'
//import Media from './Media'
import MediaContainer from '../containers/MediaContainer'
import '../../css/styles.css'

const Playlist = (props)=>{

    return(
      <div className='Playlist'>      
        {props.playlist.map((mediaId)=>{
          return <MediaContainer openModal={props.handleOpenModal} id={mediaId} key={mediaId}/>
        })}
      </div>
    )
  
}

export default Playlist