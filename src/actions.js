// Action Types:
// These are the types of actions that can be sent from your app to the store

const ADD_CAT = 'ADD_CAT'
const RENAME_CAT = 'RENAME_CAT'

// Action Creators:
// These are functions that create actions.  They are not bound, and therefore
// do not dispatch the action.  This is done using connect()

export function addCat(name) {
  return { type: ADD_CAT, name: name }
}

export function renameCat(id, newName) {
  return { type: RENAME_CAT, index: id, name: newName }
}
