const initialState = {
  message: "",
  isVisible: false,
}

export const notificationReducer = (state = initialState, action) => {
  switch(action.type){
    case "SHOW_SUCCESS_ALERT":
      return {...state, message: action.payload, isVisible: true}
    case "SHOW_ERROR_ALERT":
      return {...state, message: action.payload, isVisible: true}
    case "HIDE_NOTIFICATION":
      return {...state, isVisible: false}
    default:
      return state
  }
}