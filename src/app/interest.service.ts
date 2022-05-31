import { Injectable } from '@angular/core';
import {
  InterestDetails,
  MonthlyArmotizationElements,
} from './interest-details';

@Injectable({
  providedIn: 'root',
})
export class InterestService {
  constructor() {}

  calculator = (p: number, n: number, interest_rate: number) => {
    const i = interest_rate / 100 / 12;
    const dem = p * i;
    const lnm = (1 / (1 + i)) ** n;
    const r = dem / (1 - lnm);

    return r;
  };

  // loan_amount:number,months:number,interest_rate:number

  interest_calculator(
    interstDetails: InterestDetails
  ): MonthlyArmotizationElements[] {
    let result: MonthlyArmotizationElements[] = [];

    let { balance, rate, months } = interstDetails;

    const i = rate / 100 / 12;
    let index = 1;

    while (months > 0) {
      let interest;
      let p;
      let total;

      total = this.calculator(balance, months, rate);
      interest = i * balance;

      p = total - interest;
      balance = balance - p;

      if (balance < 0) balance = 0;

      result.push(
        new MonthlyArmotizationElements(index, p, interest, total, balance)
      );

      console.log(
        index +
          '      ' +
          p +
          '      ' +
          interest +
          '      ' +
          total +
          '      ' +
          balance
      );

      months -= 1;

      index += 1;
    }

    return result;
  }
}
