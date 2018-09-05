export const FETCH_USERS = 'FETCH_USERS'

// The custom axiosInstance is passed as the 3rd argument (see redux thunk for reference)
export const fetchUsers = () => async (dispatch, getState, api) => {
  const res = await api.get('/users')

  dispatch({
    type: FETCH_USERS,
    payload: res
  })
}

export const FETCH_CURRENT_USER = 'FETCH_CURRENT_USER'

export const fetchCurrentUser = () => async (dispatch, getState, api) => {
  const res = await api.get('/current_user')

  dispatch({
    type: FETCH_CURRENT_USER,
    payload: res
  })
}
