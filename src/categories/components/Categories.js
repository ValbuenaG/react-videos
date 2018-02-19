import React from 'react'
import Category from './Category.js'
import '../../css/styles.css'
import Media from '../../playlist/components/Media'
import SearchContainer from '../../widgets/containers/SearchContainer'

const Categories = (props)=>{
  return(
    <div className='Categories'>
      <SearchContainer/>
      {
        props.isLoading &&(
          <p>is loading...</p>
        )
      }
      {props.search.map((item)=>{
        return <Media openModal={props.handleOpenModal} {...item.toJS()} key={item.get('id')}/>
      })}
      {props.categories.map((item)=>{
        return <Category 
          handleOpenModal={props.handleOpenModal} 
          key={item.get('id')} 
          {...item.toJS()}/>
      })}
    </div>
    )
}
export default Categories