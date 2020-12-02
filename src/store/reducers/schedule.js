import { REGISTER, ERROR } from '../actions/Schedule/types'

const inialState = {
  month: '',
  year: '',
  weekDay: '',
  numberDay: '',
  hour: '',
  email: '',
  name: '',
  phone: ''
}

export default function schedule(state = inialState, action) {
  const { type, payload } = action
  switch(type) {
    case REGISTER:
      return {...payload}
    case ERROR:
    default:
      return false
  }
}
