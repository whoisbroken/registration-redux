import { combineReducers } from 'redux';
import { usersReducer } from "./usersReducer";
import { addFormReducer } from "./addFormReducer";
import { jokesReducer } from "./jokesReducer";
import { notificationReducer } from "./notificationReducer";

export const rootReducer = combineReducers ({
  users: usersReducer,
  formData: addFormReducer,
  joke: jokesReducer,
  notification: notificationReducer,
});