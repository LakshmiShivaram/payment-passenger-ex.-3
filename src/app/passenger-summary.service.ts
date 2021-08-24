import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { addPassengerDetails } from './formStore/form.action';

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
  setDetails(val) {
    this.summaryDetails = val;
    // this.store.dispatch(addPassengerDetails(val));
  }
}
