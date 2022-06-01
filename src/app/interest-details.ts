export class InterestDetails {
  balance: number;
  rate: number;
  months: number;
  startDate: any;

  constructor(balance: number, rate: number, months: number, startDate: any) {
    this.balance = balance;
    this.rate = rate;
    this.months = months;
    this.startDate = startDate;
  }
}

export class MonthlyArmotizationElements {
  year: any;
  principal: number;
  interest: number;
  total: number;
  balance: number;

  constructor(
    year: any,
    principal: number,
    interest: number,
    total: number,
    balance: number
  ) {
    this.year = year;
    this.principal = principal;
    this.interest = interest;
    this.total = total;
    this.balance = balance;
  }
}

export class Year {
  year: number;
  principal: number;
  interest: number;
  total: number;
  balance: number;
  constructor(
    year: number,
    principal: number,
    interest: number,
    total: number,
    balance: number
  ) {
    this.year = year;
    this.principal = principal;
    this.interest = interest;
    this.total = total;
    this.balance = balance;
  }
}
