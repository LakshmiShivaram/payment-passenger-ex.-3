import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-paymentform',
  templateUrl: './paymentform.component.html',
  styleUrls: ['./paymentform.component.css']
})
export class PaymentformComponent implements OnInit {
  paymentForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {}

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

  Continue() {
    alert('Confirmed.');
  }
}
