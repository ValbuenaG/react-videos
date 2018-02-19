import React, {Component} from 'react'
import HomeLayout from '../components/homeLayout'
import Categories from '../../categories/components/Categories'
import Related from '../components/related'
import ModalContainer from  '../../widgets/containers/modal'
import Modal from  '../../widgets/components/modal'
import HandleError from '../errors/containers/handleError'
import VideoPlayer from '../../player/containers/VideoPlayer'
import {connect} from 'react-redux'
import {List as list} from 'immutable'
import * as actions from '../../actions'
import {bindActionCreators} from 'redux'

class Home extends Component{
  
  HandleCloseModalClick = (ev)=>{    
    this.props.actions.closeModal()
  }

  handleOpenModal = (id)=>{
    this.props.actions.openModal(id)
  }
  render(){
    return(
      <HandleError>
        <HomeLayout>
          <Related/>
          
          <Categories 
            categories={this.props.categories} 
            handleOpenModal={this.handleOpenModal}
            search={this.props.search}
            isLoading={this.props.isLoading}
            />
            {this.props.modal.get('visibility') && (
            <ModalContainer>
              <Modal handleClick={this.HandleCloseModalClick}>
                <VideoPlayer
                id={this.props.modal.get('mediaId')}
                /*src={this.state.media.src}
                title={this.state.media.title}*/
            autoplay/>
              </Modal>
            </ModalContainer>
          )}
      </HomeLayout>
      </HandleError>
    )
  }
}
let mapStateToProps = (state, props)=>{
  const categories = state.get('data').get('categories').map((categoryId)=>{
    return state.get('data').get('entities').get('categories').get(categoryId)
  })
  let searchResults = []
  const search = state.get('data').get('search')
  if(search){
    const mediaList = state.get('data').get('entities').get('media')
    searchResults = mediaList.filter((item)=>(
      item.get('title').toLowerCase().includes(search.toLowerCase())
    )).toList()
 
  }
  return{
  categories:categories,
  search: searchResults,
  modal: state.get('modal'),
  isLoading: state.get('isLoading').get('active')
  }
}
const mapDispatchToProps = (dispatch)=>({
  actions: bindActionCreators(actions, dispatch)
})
export default connect(mapStateToProps, mapDispatchToProps)(Home)