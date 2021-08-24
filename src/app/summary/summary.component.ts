import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { PassengerSummaryService } from '../passenger-summary.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {
  @Input() summary: FormGroup[];
  constructor(private summaryService: PassengerSummaryService) {}

  ngOnInit() {
    if (!this.summary) {
      this.summary = this.summaryService.getDetails();
    }
  }
}
