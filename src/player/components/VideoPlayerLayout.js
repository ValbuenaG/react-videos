import React from 'react'
import '../../css/styles.css'
const VideoPlayerLayout = (props)=>(
  <div className='VideoPlayer'ref={props.setRef}>
    {props.children}
    
  </div>
)
export default VideoPlayerLayout