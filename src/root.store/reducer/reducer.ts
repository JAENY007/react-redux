import { actionTypes } from "../constant/actionTypes";

const initialState = {
}

type TokenParams = {
  type: string;
  payload: string;
}

export const setToken = (state = "", { type, payload }:TokenParams ) => {
    switch (type) {
        case actionTypes.SET_TOKEN:
            return payload;
        default:
            return state;
    }
}