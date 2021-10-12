/**
 * Redux store contains all reducers' state (refer to /reducer/* or reducers.js), and middleware chain plugin
 */
import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers";

/**
 * Middleware plugins
 * - logger for ease of troubleshoot
 * - thunk - enable action dispatch in asynchronous mode when necessary
 */
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

/**
 * Create logger
 */
const logger = createLogger();

/**
 * Create a store reducers with middleware chain
 */
const store = createStore(reducers, applyMiddleware(thunk, logger));

export default store;