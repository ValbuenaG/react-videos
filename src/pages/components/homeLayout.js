import React from 'react'
import '../../css/styles.css'
const HomeLayout = (props)=>{
  return(
    <section className='HomeLayout'>
      {props.children}
    </section>
    )
}

export default HomeLayout