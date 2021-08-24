export interface Ipassenger {
  firstname: string;
  lastname: string;
  address: string;
  email: string;
  phonenumber: number;
}

export interface passangerState {
  passengerDetails: Ipassenger;
}
