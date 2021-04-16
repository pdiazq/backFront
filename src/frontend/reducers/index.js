const reducer = (state, action) => {
  switch (action.type) {

    case 'SEARCH':
      console.log(`REDUCERS ACTION.PAYLOAD  ${JSON.stringify(action.payload)}`)
      return {
        ...state,
        mySearch: action.payload
      }
    
    case 'DETAIL':
      console.log(`REDUCERS ACTION. product ${JSON.stringify(action.payload)}`)
      return {
        ...state,
        product: action.payload
      }

    case 'SET_FAVORITE':
      return {
        ...state,
        myList: [...state.myList, action.payload]
      }
    case 'DELETE_FAVORITE':
      //console.log(`REDUCERS ACTION.PAYLOAD  ${action.payload}`)
      return {
        ...state,
        myList: state.myList.filter(items => items._id !== action.payload)
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