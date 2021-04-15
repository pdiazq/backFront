import axios from 'axios';

export const setFavorite = payload => ({
  type: 'SET_FAVORITE',
  payload,
});

export const loginRequest = payload => ({
  type: 'LOGIN_REQUEST',
  payload,
});

export const logoutRequest = payload => ({
  type: 'LOGOUT_REQUEST',
  payload,
});

export const registerRequest = payload => ({
  type: 'REGISTER_REQUEST',
  payload,
});

export const deteleFavorite = payload => ({
    type: 'DELETE_FAVORITE',
    payload,
  });


export const searchList = payload => ({
  type: 'SEARCH_LIST',
  payload,
});
  

export const getVideoSource = payload => ({
  type: 'GET_VIDEO_SOURCE',
  payload,
});

export const setError = payload => ({
  type: 'SET_ERROR',
  payload,
});

export const registerUser = (payload, redirectUrl) => {
  return (dispatch) => {
    axios.post('/auth/sign-up', payload)
      .then(({ data }) => dispatch(registerRequest(data)))
      .then(() => {
        window.location.href = redirectUrl
      })
      .catch(error => dispatch(setError(error)))
  };
};

export const loginUser = ({ email, password }, redirectUrl) => {
  return (dispatch) => {
    axios({
      url: '/auth/sign-in/',
      method: 'post',
      auth: {
        username: email,
        password
      },
    })
      .then(({ data }) => {
        document.cookie = `email=${data.user.email}`;
        document.cookie = `name=${data.user.name}`;
        document.cookie = `id=${data.user.id}`;
        dispatch(loginRequest(data.user));
      })
      .then(() => {
        window.location.href = redirectUrl;
      })
      .catch(err => dispatch(setError(err)));
  }
};


export const favoriteMovie = (userId, movieId, cb) => {

        console.log (`ACTIONS FAVORITE MOVIE !!!!!!!!!!!! user: ${userId}, Movie: ${movieId}`);
        let data = {
          "movies": movieId
        };

        axios({
          url: `/user/${userId}`,
          method: 'put',
          data
        })
      .then((data) => {
        console.log (`EL DATA SE ENVIO DESDE .THEN DE ACTIONS PARA LA ACCION DE ADICIONAR PELI ${JSON.stringify(data)}`)

      })
      .catch(err => console.log(`ESTO ES UN PUTO ERROR!!   ${err}`));
};


export const deleteFavoriteMovie = (userId, movieId, cb) => {
  console.log (`ACTIONS DELETE MOVIE !!!!!!!!!!!! user: ${userId}, Movie: ${movieId}`);
  let data = {
    "movies": movieId
  };

  axios({
    url: `/user/${userId}`,
    method: 'delete',
    data
  })
.then((data) => {
  console.log (`EL DATA SE ENVIO DESDE .THEN DE ACTIONS PARA LA ACCION DE BORRAR PELI ${JSON.stringify(data)}`)

})
.catch(err => console.log(`ESTO ES UN PUTO ERROR DE BORRADO!!   ${err}`));
};

// Traer data basado en filtro


export const getDataFilter = (dataGet, cb) => {
  let data = {
    "title": dataGet
  };
  console.log(`Trayendo datos = ${JSON.stringify(data)}`)

  axios({
    url: '/movies/filter',
    method: 'post',
    data
  })
.then((data) => {
  console.log (`EL DATA SE ENVIO DESDE .THEN getDataFilter ${JSON.stringify(data.data.data)}`)

})
.catch(err => console.log(`ESTO ES UN PUTO ERROR PARCE!!   ${err}`));
};


export { setFavorite as default }