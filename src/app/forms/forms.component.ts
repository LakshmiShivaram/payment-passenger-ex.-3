import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import {
  resetPassengerDetails,
  setPassengerDetails
} from '../formStore/form.action';
import { PassengerSummaryService } from '../passenger-summary.service';
import { Ipassenger } from '../sharedData/passengerDetails';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  passengerForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private summaryService: PassengerSummaryService,
    private store: Store<{ passengeDetails: Ipassenger }>
  ) {}

  ngOnInit() {
    this.passengerForm = this.formBuilder.group({
      firstname: ['', [Validators.required, Validators.maxLength(12)]],
      lastname: ['', [Validators.required, Validators.maxLength(10)]],
      address: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phonenumber: [
        '',
        [Validators.required, Validators.minLength(8), Validators.maxLength(12)]
      ]
    });
  }

  onSubmit() {
    this.summaryService.setDetails(this.passengerForm.value);
    this.router.navigate(['/paymentForm']);
  }

  reset() {
    this.store.dispatch(resetPassengerDetails());
  }
}
