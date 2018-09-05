export const FETCH_USERS = 'FETCH_USERS'

// The custom axiosInstance is passed as the 3rd argument (see redux thunk for reference)
export const fetchUsers = () => async (dispatch, getState, api) => {
  const res = await api.get('/users')

  dispatch({
    type: FETCH_USERS,
    payload: res
  })
}
