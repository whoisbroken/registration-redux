let userId = 1

export const addUser = (userData) => ({
  type: "ADD_USER",
  payload: {...userData, id: ++userId},
})