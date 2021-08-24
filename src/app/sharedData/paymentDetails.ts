export interface Ipayment {
  creditCardNumber: number;
  expirationDate: number;
  cva: number;
}

export interface paymentState {
  paymentDetails: Ipayment;
}
