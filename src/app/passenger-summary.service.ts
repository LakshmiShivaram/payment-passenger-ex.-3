import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { setPassengerDetails } from './formStore/form.action';
import { setPaymentDetails } from './paymentFormStore/payment.action';
import { Ipassenger } from './sharedData/passengerDetails';
import { Ipayment } from './sharedData/paymentDetails';

@Injectable()
export class PassengerSummaryService {
  constructor(private store: Store) {}
  private _summaryDetails: [];

  private set summaryDetails(val) {
    this._summaryDetails = val;
  }

  private get summaryDetails() {
    return this._summaryDetails;
  }

  getDetails() {
    return this.summaryDetails;
  }
  setDetails(passengerValue) {
    this.summaryDetails = passengerValue;
    let passengerDetails: Ipassenger = passengerValue;
    this.store.dispatch(setPassengerDetails({ passengerDetails }));
  }
}
