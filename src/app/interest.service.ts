import { Injectable } from '@angular/core';
import { InterestDetails } from './interest-details';

@Injectable({
  providedIn: 'root',
})
export class InterestService {
  constructor() {}

  calculateInterest(interstDetails: InterestDetails): number {
    const rate = interstDetails.annualInterestRate / 100;
    const m = 12;
    const i = rate / m;
    const n = interstDetails.timeMonths;

    const dem = timeMonths.loanAmount * i;

    const lnm = (1 / (1 + i)) ** n;
    const r = dem / (1 - lnm);

    return r;
  }
}
