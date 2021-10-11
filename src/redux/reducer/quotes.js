/**
 * Update quotes redux state through reducer
 *
 * @param {*} state - immutable state for page/ component update when there is changes depending on action
 * @param {*} action - an action contains type of changes, and payload for update
 * @returns
 */
export default function quotes(state = [], action) {
  switch (action.type) {
    case "ADD_QUOTE":
      return state.concat(action.payload);
    case "LOAD_QUOTES":
      return state.concat(action.payload);
    default:
      return state;
  }
}
