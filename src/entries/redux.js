import {createStore} from 'redux'

const initialState = [
  {
    'title' : 'False Enemy'
  },
  {
    'title' : 'valse'
  },
  {
    'title' : 'viento'
  },
]

const handleSubmit = (ev)=>{
  ev.preventDefault()
  const data = new FormData(form)
  const title = data.get('title')
  console.log(title)
  store.dispatch({
    type: 'ADD_SONG',
    data: {
      title,
    }
  })
}
const reducer = function(state, action){
  switch(action.type){
    case 'ADD_SONG':
      return [...state, action.data]
    default:
     return state
  }
}
const render = ()=>{
  const container = document.getElementById('playlist')
  const playlist = store.getState()
  container.innerHTML = ''
  playlist.forEach((item)=>{
    const template = document.createElement('p')
    template.textContent=item.title
    container.appendChild(template)
  })
}
const handleChange = ()=>{
  render()
}

const form = document.getElementById('form')
form.addEventListener('submit', handleSubmit)

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

render()
store.subscribe(handleChange)