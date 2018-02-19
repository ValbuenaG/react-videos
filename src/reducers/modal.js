import {fromJS} from 'immutable'
import {OPEN_MODAL, CLOSE_MODAL} from '../action-type'
const initialState =fromJS({
    visibility: false,
    mediaId: null
})


const modal = (state=initialState, action)=>{
  switch(action.type){
      case OPEN_MODAL:
        return state.merge({
          visibility: true,
          mediaId: action.payload.mediaId
        })
      case CLOSE_MODAL:
        return state.set('visibility', false)
      default:
        return state
  }
}
export default modal