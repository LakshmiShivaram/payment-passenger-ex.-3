import { createAction, props } from '@ngrx/store';
import { Ipayment } from '../sharedData/paymentDetails';

export const ADD_PAYMENT_DETAILS = '[passenger details page] add details';
export const RESET_PAYMENT_DETAILS = '[passenger details page] reset details';

export const addPaymentDetails = createAction(
  ADD_PAYMENT_DETAILS,
  props<{ paymentDetails: Ipayment }>()
);

export const resetPaymentDetails = createAction(RESET_PAYMENT_DETAILS);
