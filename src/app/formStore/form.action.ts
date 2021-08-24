import { createAction, props } from '@ngrx/store';
import { Ipassenger } from '../sharedData/passengerDetails';

export const ADD_PASSENGER_DETAILS = '[passenger details page] add details';
export const RESET_PASSENGER_DETAILS = '[passenger details page] reset details';

export const addPassengerDetails = createAction(
  ADD_PASSENGER_DETAILS,
  props<{ passengerDetails: Ipassenger }>()
);

export const resetPassengerDetails = createAction(RESET_PASSENGER_DETAILS);
