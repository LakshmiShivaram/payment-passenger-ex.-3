import { createReducer, on, State } from '@ngrx/store';
import {
  setPassengerDetails,
  resetPassengerDetails
} from '../formStore/form.action';
import { passangerState } from '../sharedData/passengerDetails';

const initialState: passangerState = {
  passengerDetails: null
};

const _passengerReducer = createReducer(
  initialState,

  on(setPassengerDetails, (state, action) => {
    return { ...state, passengerDetails: action.passengerDetails };
  }),

  on(resetPassengerDetails, state => {
    return { ...state, passengerDetails: null };
  })
);

export function passengerReducer(state, action) {
  return _passengerReducer(state, action);
}
