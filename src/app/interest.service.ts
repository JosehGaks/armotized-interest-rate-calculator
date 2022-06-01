import { Injectable } from '@angular/core';
import {
  InterestDetails,
  MonthlyArmotizationElements,
  Year,
} from './interest-details';

import * as moment from 'moment';

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
    interestDetails: InterestDetails
  ): MonthlyArmotizationElements[] {
    let result: MonthlyArmotizationElements[] = [];

    let { balance, rate, months, startDate } = interestDetails;

    const i = rate / 100 / 12;
    let index = 1;
    // let newDate = moment(startDate);

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
        new MonthlyArmotizationElements(startDate, p, interest, total, balance)
      );
      startDate = moment(startDate).add(1, 'M');
      months -= 1;
      index += 1;
    }

    return result;
  }

  sliceIntoChunks(arr: any[]) {
    let res = [];
    for (let i = 0; i < arr.length; i += 12) {
      let chunk = arr.slice(i, i + 12);
      res.push(chunk);
    }
    return res;
  }

  mapIntoYear(res: any[]) {
    let yearlyArmot = [];
    for (let i = 0; i < res.length; i += 1) {
      yearlyArmot.push(
        new Year(
          i + 1,
          res[i]
            .map((t: any) => t.principal)
            .reduce((acc: any, value: any) => acc + value, 0),
          res[i]
            .map((t: any) => t.interest)
            .reduce((acc: any, value: any) => acc + value, 0),
          res[i]
            .map((t: any) => t.total)
            .reduce((acc: any, value: any) => acc + value, 0),
          res[i].at(-1).balance
        )
      );
    }
    console.log(yearlyArmot);
    return yearlyArmot;
  }
}
