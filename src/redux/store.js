/**
 * Redux store contains all reducers' state (refer to /reducer/* or reducers.js), and middleware chain plugin
 */
import { createStore, applyMiddleware } from "redux";
import { createLogger } from 'redux-logger'
import reducers from "./reducers";

/**
 * Create logger
 */
const logger = createLogger();

/**
 * Create a store reducers with middleware chain
 */
const store = createStore(reducers, applyMiddleware(logger));

export default store;