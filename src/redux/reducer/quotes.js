/**
 * Default state declaration
 */
const initialState = {
  data: []
};

/**
 * Update quotes redux state through reducer
 *
 * @param {*} state - immutable state for page/ component update when there is changes depending on action
 * @param {*} action - an action contains type of changes, and payload for update
 * @returns
 */
export default function quotes(state = initialState, action) {
  switch (action.type) {
    case "ADD_QUOTE":
    case "LOAD_QUOTES":
      return Object.assign({}, state, {
        data: state.data.concat(action.payload),
      });
    default:
      return state;
  }
}
