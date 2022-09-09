import { Loading,Success,Failure } from "./actions";
import { Failure } from './actionTypes';

const initialState = 0;

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "Loading": {
      data: action.payload;
    }
    case "Success": {
      data: action.payload;
    }
    case "Failure": {
      data: action.payload;
    }
  }
};
export default reducer