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

  // saveForm() {
  //   alert('Form Saved.');
  // }

  onSubmit() {
    // this.store.dispatch(setPassengerDetails({ passengerDetails }));
    this.summaryService.setDetails(this.passengerForm.value);
    let passengerDetails: Ipassenger = {
      firstname: this.passengerForm.value.firstname,
      lastname: this.passengerForm.value.lastname,
      address: this.passengerForm.value.address,
      email: this.passengerForm.value.email,
      phonenumber: this.passengerForm.value.phonenumber
    };
    this.store.dispatch(setPassengerDetails({ passengerDetails }));

    this.router.navigate(['/paymentForm']);
  }
  // saveForm(details) {
  //   alert('Form Saved.');
  //   let passengerDetails: Ipassenger = {
  //     firstname: details.firstname,
  //     lastname: details.lastname,
  //     address: details.address,
  //     email: details.email,
  //     phonenumber: details.phonenumber
  //   };
  //   this.store.dispatch(setPassengerDetails({ passengerDetails }));
  // }

  reset() {
    this.store.dispatch(resetPassengerDetails());
  }
}
