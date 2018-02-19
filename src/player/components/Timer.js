import React from 'react'
import '../../css/styles.css'



const Timer = (props)=>(
  <div className='Timer'>
    <p>
      <span color='white'>{props.currentTime}/{props.duration}</span>
    </p>
  </div>
)
export default Timer