import React from 'react'
import '../../css/styles.css'
const ProgressBar = (props) =>(
  <div className='ProgressBar'>
    <input type="range"
      min={0}
      max={props.duration}
      value={props.value}
      onChange={props.handleChangeValue}/>
  </div>
)
export default ProgressBar