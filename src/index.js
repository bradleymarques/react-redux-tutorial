import { createStore } from 'redux'
import catApp from './reducers'

let store = createStore(
  catApp, /* initial_state_from_server, */
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )

// TESTING:

//import { addCat, renameCat } from './actions'

//console.log()
