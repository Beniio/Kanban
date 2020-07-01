import { combineReducers, Action } from "redux";
import { reducer as form } from "redux-form";

export const rootReducer = combineReducers({
  formModule: form
});
