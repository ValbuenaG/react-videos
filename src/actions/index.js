import {
  CLOSE_MODAL,
  OPEN_MODAL,
  SEARCH_ENTITIES,
  SEARCH_ASYNC_ENTITIES,
  IS_LOADING
} from '../action-type'

export const openModal = (id)=>({
  type: OPEN_MODAL,
  payload:{
    mediaId:id
  }
})

export const closeModal=()=>({
  type:CLOSE_MODAL
})

export const searchEntities=(query)=>({
  type:SEARCH_ENTITIES,
  payload: {
    query
  }
})

export const isLoading=(value)=>({
  type: IS_LOADING,
  payload:{
    value
  }
})

export const searchAsync = (query) =>
 dispatch=>{
    dispatch(isLoading(true))
    setTimeout(()=>{

    dispatch(isLoading(false))      
    dispatch(searchEntities(query))
    
    },
    5000)
}