const initialState = {
  count: 0,
  text:'sddddddddd'
};

function counterReducer(state = initialState, action) {
  switch(action.type) {
    case 'INCREMENT':
      return {

        count: state.count + 1,
        text:'aaaaaaaaaa'
      };
    case 'DECREMENT':
      return {
          ...state,
        count: state.count - 1,
        text:'bbbbbbbbbbbb'
      };
    default:
      return state;
  }
}

export default counterReducer;