import schemas from '../schemas/index'
import {fromJS} from 'immutable'
import {SEARCH_ENTITIES} from '../action-type'
const initialState = fromJS({
    entities: schemas.entities,
    categories: schemas.result.categories,
    search: '',
})

const data =(state= initialState, action)=>{
  switch(action.type){
    case SEARCH_ENTITIES:{
     /* let result = []
      if(action.payload.query){

      const list = state.data.categories.forEach((category)=>{
        category.playlist.map((items)=>{
          if(items.author.toLowerCase().includes(action.payload.query.toLowerCase())||
            items.title.toLowerCase().includes(action.payload.query.toLowerCase())){
            result = result.concat(items)
          }
        })
      })

      }
      return{
        ...state,
        search: result
      }*/
      return state.set('search', action.payload.query)
    }
    default: return state
  }
}
export default data