import React from 'react' 
import '../../css/styles.css'
import FullScreenIcon from '../../icons/components/FullScreen'
const FullScreen =(props) =>(
  <div
    className='FullScreen'
    onClick={props.handleFullScreen}>
    <FullScreenIcon
      color='white'
      size={25}
      />
  </div>
)

export default FullScreen