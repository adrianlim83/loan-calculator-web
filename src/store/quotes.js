import { createStore } from "redux";

/**
 * Default state declaration on redux store
 */
const initialState = {
    quotes: [],
    signUpModal: {
        open: false
    }
}

/**
 * Update redux state through reducer
 * 
 * @param {*} state - immutable state for page/ component update when there is changes depending on action
 * @param {*} action - an action contains type of changes, and payload for update
 * @returns 
 */
const reducer = (state = initialState, action) => {

    if (action.type === 'ADD_QUOTE') {
        return Object.assign({}, state, {
            quotes: state.quotes.concat(action.payload)
        });
    }

    if (action.type === 'LOAD_QUOTES') {
        return Object.assign({}, state, {
            quotes: state.quotes.concat(action.payload)
        });
    }

    return state;
}

/**
 * Create a store reducer
 */
const store = createStore(reducer);

export default store;