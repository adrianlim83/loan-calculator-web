import { combineReducers } from "redux";
import quotes from "./reducer/quotes";

/**
 * Contains all the store reducers state.
 * Refer to store.js and /reducer/*
 */
export default combineReducers({
  quotes
});
