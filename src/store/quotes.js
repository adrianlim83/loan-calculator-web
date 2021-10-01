import { createStore } from "redux";

const initialState = {
    quotes: [],
    signUpModal: {
        open: false
    }
}

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

const store = createStore(reducer);

export default store;