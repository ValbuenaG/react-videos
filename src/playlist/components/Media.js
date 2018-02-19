import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import '../../css/styles.css'
class Media extends PureComponent{
  state = {
    author: this.props.author,
    cover: this.props.cover,
    title: this.props.title
  }

  handleClick = (ev)=>{
    this.props.openModal(this.props.id)
  }
  render(){
    const {cover, title, author} = this.state
    return(
      <div className='Media' onClick={this.handleClick}>
        <div className='Media-cover'>
          <img className='Media-image' 
            src={cover}
            alt=""
            width={260}
            height={160}/>
        </div>
        <h3 className='Media-title'>{title}</h3>
        <p className='Media-author'>{author}</p>
      </div>
    )
  }
}
Media.propTypes={
  cover: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired
}

export default Media