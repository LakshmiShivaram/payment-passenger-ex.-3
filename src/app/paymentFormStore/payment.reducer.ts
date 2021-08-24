import { createReducer, on, State } from '@ngrx/store';
import {
  setPaymentDetails,
  resetPaymentDetails
} from '../paymentFormStore/payment.action';
import { paymentState } from '../sharedData/paymentDetails';

const initialState: paymentState = {
  paymentDetails: null
};
const _paymentsReducer = createReducer(
  initialState,
  on(setPaymentDetails, (state, action) => {
    return { ...state, paymentDetails: action.paymentDetails };
  }),
  on(resetPaymentDetails, state => {
    return { ...state, paymentDetails: null };
  })
);

export function paymentReducer(state, action) {
  return _paymentsReducer(state, action);
}
