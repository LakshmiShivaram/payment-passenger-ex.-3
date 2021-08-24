import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import {
  setPaymentDetails,
  resetPaymentDetails
} from '../paymentFormStore/payment.action';
import { Ipayment } from '../sharedData/paymentDetails';

@Component({
  selector: 'app-paymentform',
  templateUrl: './paymentform.component.html',
  styleUrls: ['./paymentform.component.css']
})
export class PaymentformComponent implements OnInit {
  paymentForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private store: Store) {}

  ngOnInit() {
    this.paymentForm = this.formBuilder.group({
      creditCardNumber: [
        '',
        [Validators.required, Validators.pattern('^[0-9]{16}$')]
      ],
      expirationDate: [
        '',
        [
          Validators.required,
          Validators.pattern('^(0[1-9]|10|11|12)/[0-9]{2}$')
        ]
      ],
      cva: ['', [Validators.required, Validators.pattern('^[0-9]{3}$')]]
    });
  }

  onSubmit() {
    alert('Confirmed.');
    // let paymentDetails: Ipayment = {
    //   creditCardNumber: this.paymentForm.value.creditCardNumber,
    //   expirationDate: this.paymentForm.value.expirationDate,
    //   cva: this.paymentForm.value.cva
    // };
    this.store.dispatch(setPaymentDetails(this.paymentForm.value));
  }

  reset() {
    this.store.dispatch(resetPaymentDetails());
  }
}
