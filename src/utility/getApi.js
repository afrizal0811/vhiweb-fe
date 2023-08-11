import axios from 'axios'
import { localStorages } from '../utility/localStorages'

export const getApi = async (URL) => {
  const url = await axios
    .get(URL)
    .then((response) => {
      return response.data
    })
    .catch((error) => {
      return error
    })
  return url
}

export const postApi = async (URL, params) => {
  const url = await axios
    .post(URL, params)
    .then((response) => {
      return response
    })
    .catch((e) => {
      return e.response
    })
  return url
}

export const apiValidation = (response) => {
  if (response.status >= 400) {
    return response.data.error
  } else {
    localStorages(response.data.token)
  }
}
