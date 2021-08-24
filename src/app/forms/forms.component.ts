import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PassengerSummaryService } from '../passenger-summary.service';

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
    private summaryService: PassengerSummaryService
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

  saveForm() {
    alert('Form Saved.');
  }

  continue(details: string) {
    this.summaryService.setDetails(details);
    this.router.navigate(['/paymentForm']);
  }
}
