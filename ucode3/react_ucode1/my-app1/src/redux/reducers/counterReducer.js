const initialState = {
  count: 0,
};


// {
//   type: 'DECREEMENT',
//   value : 5
// }
function counterReducer(state = initialState, action) {
  switch(action.type) {
    case 'INCREMENT':
      return {

        count: state.count + 1,
      };
    case 'DECREMENT':
      return {
        count: state.count - 1,
      };
      case 'SET_VALUE':
      return {
        count: action.value,
      };
    default:
      return state;
  }
}

export default counterReducer;