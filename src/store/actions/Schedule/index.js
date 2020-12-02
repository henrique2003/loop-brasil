import { ERROR, REGISTER } from './types'

export const register = (data) => async dispatch => {
  try {
    // api

    dispatch({
      type: REGISTER,
      payload: data
    })
  } catch (error) {
    dispatch({ type: ERROR })
  }
}
