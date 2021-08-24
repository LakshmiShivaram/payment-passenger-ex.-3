import { Injectable } from '@angular/core';

@Injectable()
export class PassengerSummaryService {
  constructor() {}
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
  }
}
