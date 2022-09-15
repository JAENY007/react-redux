import { actionTypes } from "../constant/actionTypes"

export const setToken = (token:string) => {
  return {
      type: actionTypes.SET_TOKEN,
      payload: token
  }
}