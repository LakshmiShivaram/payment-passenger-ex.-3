import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { SummaryComponent } from './summary/summary.component';
import { PaymentformComponent } from './paymentform/paymentform.component';
import { FormsComponent } from './forms/forms.component';
import { RouterModule, Routes } from '@angular/router';
import { PassengerSummaryService } from './passenger-summary.service';

const routes: Routes = [
  { path: 'forms', component: FormsComponent },
  { path: 'paymentForm', component: PaymentformComponent },
  { path: 'summary', component: SummaryComponent },
  { path: '', redirectTo: 'forms', pathMatch: 'full' }
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    SummaryComponent,
    PaymentformComponent,
    FormsComponent
  ],
  providers: [PassengerSummaryService],
  bootstrap: [AppComponent]
})
export class AppModule {}
