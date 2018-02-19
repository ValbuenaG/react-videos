import React from 'react'
import '../../css/styles.css'
import VolumeButton from '../../icons/components/Volume'

const Volume = (props)=>(
  <button className='Volume'>
    <VolumeButton
      size={25}
      color='white'/>
    <div className='VolumeRange'>
      <input 
        type="range"
        min={0}
        max={1}
        step={.05}
        value={props.value}
        onChange={props.handleVolumeChange}/>
    </div>
  </button>
)
export default Volume