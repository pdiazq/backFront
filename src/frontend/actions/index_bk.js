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
          userId,
          movieId
        };

        axios({
          url: '/user-movies',
          method: 'post',
          data
        })
      .then((data) => {
        console.log (`EL DATA SE ENVIO DESDE .THEN DE ACTIONS PARA LA ACCION DE ADICIONAR PELI ${JSON.stringify(data)}`)

      })
      .catch(err => console.log(`ESTO ES UN PUTO ERROR!!   ${err}`));
};



export const deleteFavoriteMovie = (userMovieId, cb) => {

  console.log (`ACTIONS DELETE FAVORITE MOVIE !!!!!!!!!!!! userMovie: ${userMovieId}`);

  axios({
    url: `/user/${userMovieId}`,
    method: 'delete',
  })
.then((data) => {
  console.log (`EL DATA SE ENVIO BORRÓ .THEN DE ACTIONS PARA BORRADO DE ADICIONAR PELI ${JSON.stringify(data)}`)

})
.catch(err => console.log(`ESTO ES UN PUTO ERROR!!   ${err}`));
};





export { setFavorite as default }