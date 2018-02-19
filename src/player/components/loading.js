import React from 'react'
import '../../css/styles.css'
const Loading =(props)=>{
  if(!props.loading) return null
  return(
  <div className='Loading'>
    <span>Cargando...</span>
  </div>)
}
export default Loading