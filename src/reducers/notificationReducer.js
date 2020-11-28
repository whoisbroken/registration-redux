const initialState = {
  message: "",
  successAlert: false,
  errorAlert: false,
}

export const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SHOW_SUCCESS_ALERT":
      return {
        ...state, message: "User Added!",
          successAlert: true
      }
      case "SHOW_ERROR_ALERT":
        return {
          ...state, message: "Something went wrong!", errorAlert: true
        }
        case "HIDE_NOTIFICATION":
          return {
            ...state, errorAlert: false, successAlert: false
          }
          default:
            return state
  }
}