import React from 'react'
import '../../css/styles.css'
const SearchLayout = (props)=>(
  <div>
    <form action="" 
      className='Search'
      onSubmit={props.handleSubmit}>
      <input
        ref={props.setRef}
        className='SearchInput'
        type="text"
        name='search'
        value={props.value}
        onChange={props.handleChange}
        placeholder="insert a coin$$"/>
    </form>
  </div>
)
export default SearchLayout