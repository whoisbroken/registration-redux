let userId = 1

export const addUser = (userData) => ({
  type: "ADD_USER",
  payload: {...userData, id: ++userId},
});

export const handleFormChange = (formData) => ({
  type: "HANDLE_FORM_CHANGE",
  payload: formData,
});

export const showSuccessAlert = (message) => ({
  type: "SHOW_SUCCESS_ALERT",
  payload: message,
});

export const showErrorAlert = (message) => ({
  type: "SHOW_ERROR_ALERT",
  payload: message,
})

export const hideNotification = () => ({
  type: "HIDE_NOTIFICATION",
});

export const loadJokeData = (payload) => ({
  type: "LOAD_JOKE_DATA",
  payload,
});

export const loadJokeStart = () => ({
  type: "LOAD_JOKE_START"
});

export const loadJokeSuccess = () => ({
  type: "LOAD_JOKE_SUCCESS"
});

export const loadJokeFail = () => ({
  type: "LOAD_JOKE_FAIL"
});

export const loadJoke = () => {
  return (dispatch) => {
    dispatch(loadJokeStart());
    fetch("https://api.chucknorris.io/jokes/random")
      .then((res) => res.json())
      .then((joke) => {
        dispatch(loadJokeData(joke.value));
        dispatch(loadJokeSuccess());
      })
      .catch(() => dispatch(loadJokeFail()))
  }
};