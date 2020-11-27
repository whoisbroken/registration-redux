const initialState = {
  value: "",
  isLoading: false,
}

export const jokesReducer = (state = initialState, action) => {
  switch(action.type){
    case "LOAD_JOKE_DATA":
      return {...state, value: action.payload }
    case "LOAD_JOKE_START":
      return {...state, isLoading: true}
    case "LOAD_JOKE_SUCCESS":
      return {...state, isLoading: false}
    case "LOAD_JOKE_FAIL":
      return {...state, isLoading: false}
    default:
      return state
  }
}