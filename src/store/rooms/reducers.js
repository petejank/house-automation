import * as actions from './actions'

const defaultState = []

export default (state = defaultState, action) => {
  switch (action.type) {
    case actions.ROOMS_SET:
      return [...action.rooms]
    case actions.ROOMS_UPDATE: {
      const {id, params} = action
      return state.map((room) => room.id === id ? {...room, ...params} : room)
    }
    default:
      return state
  }
}
