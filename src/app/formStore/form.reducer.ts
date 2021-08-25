import { createReducer, on } from '@ngrx/store';
import {
  setPassengerDetails,
  resetPassengerDetails
} from '../formStore/form.action';
import { passangerState } from '../sharedData/passengerDetails';

const initialState: passangerState = null;

const _passengerReducer = createReducer(
  initialState,

  on(setPassengerDetails, (state, action) => {
    console.log(action);
    return { ...state, ...action.passengerDetails };
  }),

  on(resetPassengerDetails, (state, action) => {
    return (state = null);
  })
);

export function passengerReducer(state, action) {
  return _passengerReducer(state, action);
}
