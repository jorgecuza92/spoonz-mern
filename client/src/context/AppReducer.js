export default (state, action) => {
  switch(action.type) {
    case 'GET_ACTIVITIES':
      return {
        ...state,
        loading: false,
        activities: action.payload
      }
    case 'DELETE_ACTIVITY':
      return {
        ...state,
        activities: state.activities.filter(activity => activity._id !== action.payload)
      }
    case 'ADD_ACTIVITY':
      return {
        ...state,
        activities: [...state.activities, action.payload,]
      }
    case 'ACTIVITY_ERROR':
      return {
        ...state,
        error: action.payload
      }
    default: 
      return state
  }
}