import { combineReducers } from 'redux';
import { usersReducer } from "./usersReducer";
import { addFormReducer } from "./addFormReducer";

export const rootReducer = combineReducers ({
  users: usersReducer,
  formData: addFormReducer,
});