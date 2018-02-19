import React from 'react'
import '../../css/styles.css'
const Controls = (props)=>(
  <div className='VideoPlayerControls'>
    {props.children}
  </div>
)
export default Controls