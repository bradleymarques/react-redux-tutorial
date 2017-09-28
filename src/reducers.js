import { ADD_CAT, RENAME_CAT } from './actions'
import { combineReducers } from 'redux'

// This is a child reducer handling it's own subset of the global state
function cats(state = [{ name: "Yuki" }, { name: "Splinter" }]) {
  switch (action.type) {
    case ADD_CAT:
      return [
        ...state,
        {
          name: action.name
        }
      ]
    case RENAME_CAT:
      return state.map((cat, index) => {
        if (index === action.index) {
          return Object.assign({}, cat, {
            name: action.newName
          })
        } else {
          return cat
        }
      })
    default:
      return state
  }
}

// This is the root "catApp" Reducer.  A Reducer has to be a pure function.
const catApp = combineReducers({
  cats
})

export default catApp
