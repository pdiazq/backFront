const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_FAVORITE':
      return {
        ...state,
        myList: [...state.myList, action.payload]
      }
    case 'DELETE_FAVORITE':
      return {
        ...state,
        myList: state.myList.filter(items => items.id !== action.payload)
      }
    case 'LOGIN_REQUEST':
    case 'REGISTER_REQUEST':
    case 'LOGOUT_REQUEST':
      return {
        ...state,
        user: action.payload
      }
    case 'GET_VIDEO_SOURCE':
      console.log(`1 EN REDUCER EL ESTADO DEL VIDEO SOURCE ..${JSON.stringify(state)}`)
      console.log(`2 EN REDUCER EL ACTION PAYLOAD DEL VIDEO SOURCE ..${action.payload}`)
      return {
        ...state,
        playing: state.trends.find(item => item.id === action.payload) ||
          state.originals.find(item => item.id === action.payload) ||
          state.myList.find(item => item.id === action.payload) || {}
      }
    default:
      return state;
  }
};

export default reducer;